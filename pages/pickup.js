import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';


const GenAppBar = dynamic(
    () => import('./../components/general/GenAppBar'),
    { ssr: false }
)

const PickupCard = dynamic(
    () => import('./../components/pickup/PickupCard'),
    { ssr: false }
)


const Pickup = ()=>{
    return (
        <>
            <GenAppBar nama="Pickup" />
            <Container>
                <Box my={2}>
            
                    <PickupCard />
              
               
                </Box>
            </Container>
           
        </>
    )
};

export default Pickup;