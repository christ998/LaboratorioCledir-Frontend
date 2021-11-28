import {useEffect, useState} from "react";
import {Alert, Box, Button, TextField} from "@mui/material";
import Modal from "@mui/material/Modal";
import LoadingButton from '@mui/lab/LoadingButton';
import requestMicroorganism from "../requests/Microorganisms";

const {createOrUpdate} = requestMicroorganism

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
    const {handleCloseModal, isOpen, info, refreshOnUpdate} = props
    const [stock, setStock] = useState()
    const [isUpdating, setIsUpdating] = useState(false)
    const [someError, setSomeError] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    const [link, setLink] = useState('')

    useEffect(() => {
        setStock(info['Samples stock'])
        setLink(info['Link'])
    }, [info])

    const updateStockOfMicroorganism = async (e) => {
        e.preventDefault()
        setIsUpdating(true)
        setTimeout(async () => {
            try {
                const res = await createOrUpdate({
                    '_id': info['_id'],
                    'Samples stock': stock,
                    'Link': link
                })
                if (res.status == 200) {
                    setIsUpdating(false)
                    setIsUpdated(true)
                    setTimeout(() => {
                        handleCloseModal()
                        refreshOnUpdate()
                    }, 1000)
                }
            }catch (e) {
                setSomeError(true)
                setTimeout(() =>{
                    handleCloseModal()
                }, 3000)
            }



        }, 1000)

    };

    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {isUpdated &&
                <Box pb="30px">
                    <Alert severity="success">Updated!</Alert>
                </Box>
                }
                {someError &&
                <Box>
                    <Alert severity="error">Error, no hay conexión</Alert>
                </Box>
                }

                <form onSubmit={updateStockOfMicroorganism}>
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
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-number"
                        label="Link"
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    {isUpdating ?
                        <LoadingButton loading variant="contained" sx={{mt: '10px', ml: '30px'}}>Submit</LoadingButton>
                        :
                        !isUpdated && (
                            <Button type="submit" variant="contained" sx={{mt: '10px', ml: '30px'}}>Actualizar</Button>

                        )
                    }
                </form>

            </Box>
        </Modal>
    )
}