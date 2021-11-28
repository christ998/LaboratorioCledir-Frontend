import Header from "../components/Header/Header";
import {Box, Container, Grid, Paper, Typography} from "@mui/material";

export default function HomeCatalogue() {
    const optionsStyle = {
        background: 'linear-gradient(180deg, rgba(172, 223, 243, 1) 35%, rgba(0, 177, 255, 1) 100%)',
        padding: '50px'
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
                            <Grid item>
                                <div style={optionsStyle}>Add Microorganism</div>
                            </Grid>
                            <Grid item >
                                <div style={optionsStyle}>
                                    Inventory
                                </div>
                            </Grid>
                            <Grid item >
                                <div style={optionsStyle}>
                                    Search Microorganism
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}