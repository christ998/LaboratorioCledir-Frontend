import InputField from "../components/Login/InputField";
import {Alert, Box, Button, Paper} from "@mui/material";
import {useState} from "react";
import authenticate from "../requests/User";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('')
    const history = useNavigate();


    const iniciarSesion = async () => {
        try {
            const response = await authenticate(email, password)
            if (response.status === 200) {
                const { data: { token } } = response
                localStorage.setItem('token', token)
                history('/home')
            }
        } catch (e) {
            e = JSON.parse(JSON.stringify(e))
            if (e.status === 404) setErrorMessage("Email is not registered")
            if (e.status === 401) setErrorMessage("Password Incorrect")
            setTimeout(() => {
                setErrorMessage('')
            }, 3500)
        }
    };

    return (
        <>
            <Helmet>
              <title>Login - MicroLab</title>
            </Helmet>
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
                    sx={{textAlign: "center", py: "80px", px: "100px"}}
                >
                    {errorMessage &&
                    <Alert variant={"filled"} severity={"error"}>{errorMessage}</Alert>
                    }

                    <h2>Sign in</h2>
                    <InputField variant={"email"} setInput={setEmail}/>
                    <br/>
                    <br/>
                    <br/>
                    <InputField variant={"password"} setInput={setPassword}/>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <Button
                            variant={"outlined"}
                            sx={{width: 200}}
                            onClick={iniciarSesion}
                        >
                            Log in
                        </Button>
                        <br/>
                        <br/>
                        <Button variant={"outlined"} sx={{width: 200}}>
                            Forgot password
                        </Button>
                    </div>
                </Paper>
            </Box>
        </>
    );
}

export default Login;
