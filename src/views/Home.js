import {Container, createTheme, Paper, ThemeProvider, Typography} from "@mui/material";
import "../styles/Home.scss"
import {styled} from "@mui/material/styles";
import photo from '../Assets/Images/Home/ufro.png'


export default function Home() {
    const Img = styled('img')({
        maxHeight: '130px',
        marginLeft: '30px'
    });

    const theme = createTheme({
        typography: {
            fontFamily: ['Inter'],

        }
    })
    return (
        <><ThemeProvider theme={theme}>

            <Paper sx={{mx: '0px', display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
                <Img src={photo}/>
                <Typography variant="h4" textAlign={"center"}>MICROBIOLOGICAL<br/>
                    RESOURCE BANK<br/>
                    UNIVERSIDAD DE LA FRONTERA mRB-UFRO
                </Typography>
            </Paper>
            <Container>


                <Typography textAlign={"justify"} variant="h6">Microbiological Resource Banks are essential
                    infrastructures to preserve and manage
                    the provision of microbiological resources, to guarantee the preservation of microbial
                    biodiversity and to successfully deliver benefits for Research, Development and Innovation in
                    different scientific fields. The Facultad de Ingeniería y Ciencias of Universidad de La Frontera is
                    a pioneer in the Central-South Zone of Chile in microbial long-term conservation. We have a
                    large experience in this field of knowledge and have advisory positions at the Executive
                    Committee of the Latin American Federation of Culture Collections-FELACC and at the World
                    Federation for Culture Collections-WFCC. In addition, we are the contact point in Chile for the
                    European Microbial Resource Research Infrastructure (MIRRI) and we have been the
                    proponents, for the first time in Chile, for the establishment of a National Network of
                    Microbial Culture Collections.
                    In order to guarantee the perpetuation of the microbial resources isolated from
                    different substrates, the mRB-UFRO carries out research to apply appropriate methods for the
                    long-term preservation of microbial strains obtained and used in the different scientific
                    projects and university pedagogical activities. Once preserved, the strains are available in an
                    open catalogue for research and teaching, through the request of national and foreign
                    researchers and academic staff, in accordance with current national and international
                    legislation.</Typography><br/>
                <Typography variant="h6" textAlign="center"><a href="/homecatalogue">Strains Catalogue</a> </Typography><br/>
                <Typography variant="h6">The microbial long-term preservation is available as a service at the mRB-UFRO.
                    Please,
                    contact us for more information: brmb-ufro@ufrontera.cl (+56) 45 259 6726.</Typography>
                <Typography variant="h6">Important notes:</Typography>
                <ul>
                    <li><Typography variant="h6">The mRB-UFRO does not carry out work on strains with a biological risk
                        higher than &quot;Class 2&quot;.</Typography></li>
                    <li><Typography variant="h6">Clients are responsible for the proper maintenance, handling and use of
                        strains obtained
                        from mRB-UFRO.</Typography></li>
                    <li><Typography variant="h6"> The mRB-UFRO is not responsible for any damage or loss resulting from
                        the improper use or
                        storage of the acquired strains.</Typography></li>
                </ul>
                <br/>
                <Typography variant="h6">Strain deposit and request forms:</Typography>
                <Typography><a href="../../public/Responsibility%20Certificate%20Request.doc" download>Responsability Certificate Request</a> </Typography>
                <Typography><a href="../../public/Public%20strain%20deposit.docx" download>Public strain deposit</a> </Typography>
                <Typography><a href="../../public/Restricted%20strain%20deposit.docx" download>Restricted strain deposit</a> </Typography>
                <Typography><a href="../../public/Strain%20request%20form.doc" download>Strain request form</a> </Typography>
            </Container>
        </ThemeProvider>

        </>
    )
}