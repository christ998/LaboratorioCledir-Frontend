import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    wordWrap: "break-word"
};

export default function ModalMicroorganism(props) {
    const {handleCloseModal, isOpen, info} = props

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Characteristic
                    </Typography>
                    <Grid container spacing={2} rowSpacing={5} wrap="wrap">
                        {Object.entries(info).map((item) => (
                            <>
                                <Grid item md={6}>
                                    {item[0]}
                                </Grid>
                                <Grid item md={6}>
                                    {item[1]}
                                </Grid>
                            </>

                        ))}
                    </Grid>


                </Box>
            </Modal>
        </div>
    );
}