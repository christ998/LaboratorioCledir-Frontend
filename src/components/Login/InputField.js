import {TextField} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export default function InputField(props){
    const { setInput } = props;

    const icon = () => {
        if (props.variant == 'email'){
            return (
                <>
                    <PersonIcon sx={{my:"8px"}} fontSize={"large"} />
                    <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="email"
                        onChange={(e) => setInput(e.target.value)}
                        sx={{ml:'20px'}}
                    />
                </>
            )
        } else if (props.variant == 'password') {
            return (
                <>
                    <LockIcon sx={{my:"8px"}} fontSize={"large"} />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setInput(e.target.value)}
                        sx={{ml:'20px'}}
                    />
                </>
            )
        }
    }

    return(
        <>
            {icon()}
        </>
    )
}