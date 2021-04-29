import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';
import { getAllPenjualIds, getPenjualData } from '../../lib/penjuals';
import { getSortedProductsData } from '../../lib/products';


export async function getStaticProps({ params }) {
  const penjualData = getPenjualData(params.id);
  const productIdsByPenjual = penjualData.barang.split(",");
  const allProductsData = getSortedProductsData();
  const productFilteredByPenjual = allProductsData.filter(product =>productIdsByPenjual.includes(product.id))
  return {
    props: {
      penjualData,
      productFilteredByPenjual
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPenjualIds()
  return {
    paths,
    fallback: false
  }
}

const PenjualAppBar = dynamic(
  () => import('./../../components/penjual/PenjualAppBar'),
  { ssr: false }
)

const ProductCard = dynamic(
  () => import('./../../components/home/ProductCard'),
  { ssr: false }
)

const ReklameCard = dynamic(
  () => import('./../../components/penjual/ReklameCard'),
  { ssr: false }
)



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function Home({penjualData,productFilteredByPenjual}) {

  const classes = useStyles();

  return (

    <React.Fragment>
       <CssBaseline />
 
      <PenjualAppBar />
      <ReklameCard penjual={penjualData} />
      <Container>
        <Box my={2}>
        {productFilteredByPenjual.map((product)=>
          <ProductCard id={product.id} image={product.gambar} harga={product.harga} id={product.id} nama={product.nama} keterangan={product.keterangan} />
         
        )}
      
 
        </Box>
      </Container>       
      
      </React.Fragment>
      
  
  )
}
