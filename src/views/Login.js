import InputField from "../components/Login/InputField";
import { Box, Button, Paper } from "@mui/material";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = () => {
    let data = { email, password };
    console.log(data);
  };
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{ textAlign: "center", py: "80px", px: "100px" }}
        >
          <h2>Sign in</h2>
          <InputField variant={"email"} setInput={setEmail} />
          <br />
          <br />
          <br />
          <InputField variant={"password"} setInput={setPassword}/>
          <br />
          <br />
          <br />
          <div>
            <Button
              variant={"outlined"}
              sx={{ width: 200 }}
              onClick={iniciarSesion}
            >
              Log in
            </Button>
            <br />
            <br />
            <Button variant={"outlined"} sx={{ width: 200 }}>
              Forgot password
            </Button>
          </div>
        </Paper>
      </Box>
    </>
  );
}

export default Login;
