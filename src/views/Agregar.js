import {Alert, AlertTitle, Box, Button, Container, Grid, Paper, TextField} from "@mui/material";
import {useState} from "react";
import requestMicroorganism from "../requests/Microorganisms";
import Header from "../components/Header/Header";
import "../styles/Agregar.scss"

const {createOrUpdate} = requestMicroorganism


function Agregar() {
    const [fields, setFields] = useState({});
    const [isCreated, setIsCreated] = useState(false)
    const [someError, setSomeError] = useState(false)
    const handleValue = (e) => {
        setFields({...fields, [e.target.name]: e.target.value})
    };

    const submit = async (e) => {
        e.preventDefault()
        try {
            const res = await createOrUpdate(fields)
            if (res.status == 200) {
                setIsCreated(true)
                setTimeout(() => {
                    setIsCreated(false)
                }, 4500)
            }
        } catch (error) {
            setSomeError(true)
            setTimeout(()=>{
                setSomeError(false)
            }, 3500)
        }
    }

    return (
        <div>
            <Header/>
            {isCreated &&
                <Container>
                    <Alert variant={"filled"}>
                        <AlertTitle>Microorganism created successfully</AlertTitle>
                        Strain code - {fields['Strain code']}
                    </Alert>
                </Container>

            }
            {someError &&
                <Container>
                    <Alert severity={"error"} variant={"filled"}>
                        <AlertTitle>Something went wrong</AlertTitle>
                        No token provided
                    </Alert>
                </Container>

            }
            <Paper sx={{pb: '40px'}}>
                <Box sx={{mt: 5}} className="container-form">
                    <Box display={"grid"} justifyContent={"center"}>
                        <p className="title">Add Microorganism</p>

                    </Box>
                    <form onSubmit={submit}>
                        <Grid columns={3} container spacing={2} textAlign={"center"}>
                            <Grid item md={1}>
                                <TextField required onChange={(e) => handleValue(e)} name="Strain code"
                                           label="Strain code"
                                           placeholder="UFROXX.XX"/>
                            </Grid>
                            <Grid item md={1}>
                                <TextField onChange={(e) => handleValue(e)} name="Microorganism type"
                                           label="Microorganism Type"
                                           placeholder="Aspergillus"/>
                            </Grid>
                            <Grid item md={1}>
                                <TextField onChange={(e) => handleValue(e)} name="Species" label="Specie"/>

                            </Grid>
                            <Grid item md={1}>
                                <TextField onChange={(e) => handleValue(e)} name="History of Deposit"
                                           label="History of Deposit"
                                           placeholder="May 2018"/>
                            </Grid>
                            <Grid item md={1}>
                                <TextField onChange={(e) => handleValue(e)} name="Date of Isolation"
                                           label="Date of Isolation"
                                           placeholder="May 2018"/>
                            </Grid>
                            <Grid item md={1}>
                                <TextField onChange={(e) => handleValue(e)} name="Source of isolation"
                                           label="Source of Isolation"
                                           placeholder="Red pepper"/>
                            </Grid>
                        </Grid>

                        <Box sx={{mt: "60px"}}>
                            <Box sx={{
                                display: "grid",
                                gridColumnGap: "20px",
                                gridTemplateColumns: '120px 120px',
                                justifyContent: "center"
                            }}>
                                <Button variant="contained" type="submit">Register</Button>
                                <Button onClick={() => setFields({})} variant="contained" type="reset">Reset</Button>
                            </Box>

                        </Box>

                    </form>
                </Box>
            </Paper>


        </div>
    );
};

export default Agregar;
