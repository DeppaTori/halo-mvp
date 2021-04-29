import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';

const GenAppBar = dynamic(
    () => import('./../components/general/GenAppBar'),
    { ssr: false }
)

const ProductDetailCard = dynamic(
    () => import('./../components/product/ProductDetailCard'),
    { ssr: false }
)

const ProductDetail = ()=>{
    return (
        <>
            <GenAppBar nama="Roti Enak" />
            <Container>
                <Box my={2}>
            
                    <ProductDetailCard />
              
               
                </Box>
            </Container>
        </>
    )
};

export default ProductDetail;