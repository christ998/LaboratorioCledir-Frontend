import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DescriptionIcon from '@mui/icons-material/Description';
import '../styles/ListMicroorganism.scss'
import {createTheme, TableFooter, TablePagination, ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";


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
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        // fetchData()
        setRows(data)
    }, [])
    //
    // const fetchData = async () => {
    //     try {
    //         const dataFetched = await axios.get('http://localhost:4000/all')
    //         dataFetched.data.forEach((item) => {
    //             let newMicroorganism = createData(item['Microorganism Type'], item['Strain code'], item['Species'],
    //                 item['History of Deposit'], item['Date of Isolation'])
    //             setRows(old => [...old, newMicroorganism])
    //         })
    //
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }
    return (
        <ThemeProvider theme={theme}>

            <TableContainer component={Paper}>
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
                        {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
                            <TableRow
                                key={row['Strain code']}
                                sx={{border: 0}}
                            >
                                <TableCell>
                                    {row['Microorganism Type']}
                                </TableCell>
                                <TableCell align="right">{row['Strain code']}</TableCell>
                                <TableCell align="right">{row['Species']}</TableCell>
                                <TableCell align="right">{row['History of Deposit']}</TableCell>
                                <TableCell align="right">{row['Date of Isolation']}</TableCell>
                                <TableCell align="right"><a href=""><DescriptionIcon/></a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 15]}
                                component="div"
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

        </ThemeProvider>

    );
}
