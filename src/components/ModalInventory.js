import {useEffect, useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    wordWrap: "break-word"
};
export default function ModalInventory(props) {
    const {handleCloseModal, isOpen, info} = props

    const [open, setOpen] = useState(false)
    const [stock, setStock] = useState()
    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        setStock(info['Samples stock'])
    }, [info])

    const updateStock = async (e) => {
        e.preventDefault()
        setIsUpdating(true)
        setTimeout(async () => {
            const res = await axios.post("http://localhost:4000/add", {
                '_id': info['_id'],
                'Samples stock': stock
            })
            if (res.status == 200) {
                setIsUpdating(false)
            }

        }, 3000)

    };

    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={updateStock}>
                    <TextField
                        id="outlined-number"
                        label="Stock"
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    {isUpdating ?
                        <LoadingButton loading variant="contained" sx={{mt: '10px', ml: '30px'}}>Submit</LoadingButton>
                        :
                        <Button type="submit" variant="contained" sx={{mt: '10px', ml: '30px'}}>Actualizar</Button>
                    }
                </form>

            </Box>
        </Modal>
    )
}