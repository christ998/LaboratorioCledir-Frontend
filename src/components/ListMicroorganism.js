import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DescriptionIcon from '@mui/icons-material/Description';
import '../styles/ListMicroorganism.scss'
import {Button, createTheme, Skeleton, TableFooter, TablePagination, ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";
import ModalMicroorganism from "./ModalMicroorganism";


export default function ListMicroorganism(props) {
    const theme = createTheme({
        components: {
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        fontFamily: "'Inter', sans-serif",
                    },
                    head: {
                        fontWeight: '700'
                    }
                }
            }
        }
    })
    const {data} = props
    const [rows, setRows] = useState([])
    const [page, setPage] = useState(0);
    const [onLoading, setOnLoading] = useState(true)
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModal, setOpenModal] = useState(false)
    const [infoModal, setInfoModal] = useState({}) // Info de un microorganismo para mostrar en el modal

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleOpenModal = (e) => {
        setInfoModal(e)
        setOpenModal(true)
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setRows(data)
            setOnLoading(false)
        }, 1000)

    }, [])

    const deploy = () => {
        if (onLoading) {
            return (
                <>
                    <Skeleton variant="rectangular" animation="wave" width={'800px'} height={20}/>
                    <br/>
                    <Skeleton variant="rectangular" animation="wave" width={'800px'} height={20}/>
                    <br/>
                    <Skeleton variant="rectangular" animation="wave" width={'800px'} height={20}/>
                </>

            )
        } else {
            return (
                <>
                    <TableContainer component={Paper} sx={{width: '800px'}}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Microorganism Type</TableCell>
                                    <TableCell align="right">Strain Code</TableCell>
                                    <TableCell align="right">Species</TableCell>
                                    <TableCell align="right">History of Deposit</TableCell>
                                    <TableCell align="right">Date of Isolation</TableCell>
                                    <TableCell align="right">Information</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row, index) => (
                                    <TableRow sx={{border: 0}} key={index}>
                                        <TableCell>
                                            {row['Microorganism Type']}
                                        </TableCell>
                                        <TableCell align="right">{row['Strain code']}</TableCell>
                                        <TableCell align="right">{row['Species']}</TableCell>
                                        <TableCell align="right">{row['History of Deposit']}</TableCell>
                                        <TableCell align="right">{row['Date of Isolation']}</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={() => handleOpenModal(row)}>
                                                <DescriptionIcon/>
                                            </Button>
                                        </TableCell>

                                    </TableRow>

                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 15]}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                    <ModalMicroorganism info={infoModal} isOpen={openModal} handleCloseModal={handleCloseModal}/>
                </>

            )
        }
    }

    return (
        <ThemeProvider theme={theme}>
            {deploy()}
        </ThemeProvider>

    );
}
