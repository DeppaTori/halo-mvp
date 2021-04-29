import Link from 'next/link'
import { getAllProductIds, getProductData } from '../../lib/products'
import { getSortedPenjualsData } from '../../lib/penjuals'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';

const GenAppBar = dynamic(
    () => import('./../../components/general/GenAppBar'),
    { ssr: false }
)

const ProductDetailCard = dynamic(
    () => import('./../../components/product/ProductDetailCard'),
    { ssr: false }
)

export async function getStaticProps({ params }) {
  const productData = getProductData(params.id);
  const allPenjuals = getSortedPenjualsData();
  const filterPenjual = allPenjuals.filter((penjual)=>penjual.id===productData.penjual);
  return {
    props: {
      productData,
      filterPenjual
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllProductIds()
  return {
    paths,
    fallback: false
  }
}

const Product = ({ productData,filterPenjual})=>{
    return (
        <>
            <GenAppBar nama={productData.nama} />
            <Container>
                <Box my={2}>
            
                    <ProductDetailCard product={productData} penjual={filterPenjual[0]} />
              
               
                </Box>
            </Container>
        </>
    )
}

export default Product;