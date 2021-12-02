import InputField from "../components/Login/InputField";
import {Box, Button, Container, Paper} from "@mui/material";

function Login() {
    return (
        <>
            <Box sx={{display: 'flex', alignItems: "center", height: '100vh', justifyContent: 'center'}}>
                    <Paper elevation={3} sx={{textAlign: 'center',py: '80px', px: '100px'}}>
                        <h2>Sign in</h2>
                        <InputField variant={"email"}/><br/><br/><br/>
                        <InputField variant={"password"}/><br/><br/><br/>
                        <div>
                            <Button variant={"outlined"} sx={{width: 200}}>Log in</Button><br/><br/>
                            <Button variant={"outlined"} sx={{width: 200}}>Forgot password</Button>
                        </div>

                    </Paper>
            </Box>

        </>

    );
}

export default Login;
