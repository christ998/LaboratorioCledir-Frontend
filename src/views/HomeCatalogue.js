import Header from "../components/Header/Header";
import {Box, Container, Grid, Link, Paper, Typography} from "@mui/material";
import "../styles/HomeCatalogue.scss"
import IsLoggedInAsAdmin from "../verifications/IsLoggedIn";

export default function HomeCatalogue() {
    const optionsStyle = {
        background: 'linear-gradient(180deg, rgba(172, 223, 243, 1) 35%, rgba(0, 177, 255, 1) 100%)',
        padding: '50px'
    }

    const aStyle = {
        textdecoration: 'none',
        color: 'black',
        textDecorationLine: 'none',
    }


    return (
        <>
            <Header/>
            <Container>
                <Paper sx={{pb: '100px'}}>
                    <Box sx={{textAlign: "center"}}>
                        <Typography variant="h4" display={"inline-block"}>Welcome</Typography><br/><br/><br/>
                        <Typography variant="h4" display={"inline-block"}>Choose an option</Typography><br/><br/><br/>
                        <Grid container justifyContent="center" spacing={5}>
                            <IsLoggedInAsAdmin>
                                <Grid item>

                                    <Link href="/agregar" style={aStyle}>
                                        <div className="onHover" style={optionsStyle}>
                                            Add Microorganism
                                        </div>
                                    </Link>

                                </Grid>
                                <Grid item>
                                    <Link style={aStyle} href="/inventario">
                                        <div className="onHover" style={optionsStyle}>
                                            Inventory
                                        </div>
                                    </Link>

                                </Grid>
                            </IsLoggedInAsAdmin>

                            <Grid item>
                                <Link style={aStyle} href="/">
                                    <div className="onHover" style={optionsStyle}>
                                        Search Microorganism
                                    </div>
                                </Link>

                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}