import GenAppBar from '../components/general/GenAppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';


const NotifikasiCard = dynamic(
    () => import('./../components/notifikasi/NotifikasiCard'),
    { ssr: false }
)

const MyNotifikasi = ()=>{
    return (
        <>
          <GenAppBar nama="Notifikasi" />
            <Container>
                <Box my={2}>
            
                    <NotifikasiCard />
              
               
                </Box>
            </Container>
        </>
    )
}

export default MyNotifikasi;