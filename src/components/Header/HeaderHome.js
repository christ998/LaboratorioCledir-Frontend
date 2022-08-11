import photo from "../../Assets/Images/Home/logoUfro.png";
import {Box, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import styles from "../../styles/HeaderHome.module.css"

function HeaderHome() {
    const Img = styled('img')({
        maxHeight: '130px',
        // marginLeft: '60px'
    });
    return (
        <Box position={"relative"} className={styles.header_responsive}>
            <Paper square={true} sx={{mx: '0px', backgroundColor: '#003a6c', color: 'white'}} >
                <Box left={54} bottom={0} className={styles.logo_centro}>
                    <Img src={photo}/>
                </Box>
                <Box>
                    <Typography variant="h4" textAlign={"center"}>MICROBIOLOGICAL<br/>
                        RESOURCE BANK<br/>
                        UNIVERSIDAD DE LA FRONTERA mRB-UFRO
                    </Typography>
                </Box>

            </Paper>
        </Box>


    )

}

export default HeaderHome