import {Alert, AlertTitle, Button, Grid, TextField} from "@mui/material";
import {useState} from "react";
import requestMicroorganism from "../requests/Microorganisms";
import Header from "../components/Header/Header";

const {createOrUpdate} = requestMicroorganism


function Agregar() {
    const [fields, setFields] = useState({});
    const [isCreated, setIsCreated] = useState(false)
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

        }
    }

    return (
        <div>
            <Header/>
            {isCreated &&
            <Alert>
                <AlertTitle>Microorganism created successfully</AlertTitle>
                Strain code - {fields['Strain code']}
            </Alert>
            }

            <form onSubmit={submit}>
                <Grid columns={4} container spacing={2}>
                    <Grid item md={1}>
                        <TextField required onChange={(e) => handleValue(e)} name="Strain code" label="Strain code"
                                   placeholder="UFROXX.XX"/>
                    </Grid>
                    <Grid item md={1}>
                        <TextField onChange={(e) => handleValue(e)} name="Microorganism type" label="Microorganism Type"
                                   placeholder="Aspergillus"/>
                    </Grid>
                    <Grid item md={1}>
                        <TextField onChange={(e) => handleValue(e)} name="Species" label="Specie"/>

                    </Grid>
                    <Grid item md={1}>
                        <TextField onChange={(e) => handleValue(e)} name="History of Deposit" label="History of Deposit"
                                   placeholder="May 2018"/>
                    </Grid>
                    <Grid item md={1}>
                        <TextField onChange={(e) => handleValue(e)} name="Date of Isolation" label="Date of Isolation"
                                   placeholder="May 2018"/>
                    </Grid>
                    <Grid item md={1}>
                        <TextField onChange={(e) => handleValue(e)} name="Source of isolation"
                                   label="Source of Isolation"
                                   placeholder="Red pepper"/>
                    </Grid>
                </Grid>


                <Button variant="contained" type="submit">Register</Button>
                <Button onClick={() => setFields({})} variant="contained" type="reset">Reset</Button>
            </form>

        </div>
    );
};

export default Agregar;
