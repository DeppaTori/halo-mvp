import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import PrimaryAppBar from './../components/PrimaryAppBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import ProductCard from './../components/home/ProductCard';
import dynamic from 'next/dynamic';
import Toolbar from '@material-ui/core/Toolbar';
import { getSortedPenjualsData } from './../lib/penjuals';
import { getSortedProductsData } from './../lib/products';

export async function getStaticProps() {
    const allPenjualsData = getSortedPenjualsData()
    const allProducts = getSortedProductsData()
    return {
      props: {
        allPenjualsData,
        allProducts
      }
    }
}


const PrimaryAppBar = dynamic(
  () => import('./../components/PrimaryAppBar'),
  { ssr: false }
)

const PenjualCard = dynamic(
  () => import('./../components/home/PenjualCard'),
  { ssr: false }
)

const WelcomeCard = dynamic(
  () => import('./../components/home/WelcomeCard'),
  { ssr: false }
)

const ProductCard = dynamic(
  () => import('./../components/home/ProductCard'),
  { ssr: false }
)

// const ElevationScroll = dynamic(
//   () => import('./../components/ElevationScroll'),
//   { ssr: false }
// )


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



export default function Home({allPenjualsData,allProducts}) {

  const classes = useStyles();
  const [penjuals,setPenjuals] = useState(allPenjualsData);
  const [defaultPenjuals,setDefaultPenjuals] = useState(allPenjualsData);
  const [products,setProducts] = useState(allProducts);
  const [defaultProducts,setDefaultProducts] = useState(allProducts);
  const [totalSearch,setTotalSearch] = useState(0);
  const [isSearch,setIsSearch] = useState(false);
  const [keySearch,setKeySearch] = useState('');

  const filterContent = (e)=>{
    if(e.target.value.length > 0){
      // hasil search penjual
      const hasilSearch = defaultPenjuals.filter((penjual)=>penjual.nama.search(new RegExp(e.target.value, 'gi')) >= 0);
      // hasil search product
      const hasilSearchProduct = defaultProducts.filter((product)=>product.nama.search(new RegExp(e.target.value, 'gi')) >= 0);
      const totalSearch = hasilSearch.length + hasilSearchProduct.length;
      setTotalSearch(totalSearch);
      setPenjuals(hasilSearch);
      setProducts(hasilSearchProduct);
      setIsSearch(true);
      setKeySearch(e.target.value);
    }else{
      setPenjuals(defaultPenjuals);
      setProducts([]);
      setTotalSearch(0);
      setIsSearch(false);
      setKeySearch('');
    }
    
  }

  return (
    // <div className="container">
    //   <Head>
    //     <title>HALO Guest [MVP1]</title>
    //     {/* <link rel="icon" href="/favicon.ico" /> */}
    //   </Head>

    //   <PrimaryAppBar />

      

    // </div>
    <React.Fragment>
       <CssBaseline />
 
      <PrimaryAppBar filterContent={filterContent} />
      <WelcomeCard />
      <Container>
        <Box my={2}>
        { isSearch  &&
          <h2>{totalSearch} hasil pencarian "{keySearch}"</h2>
         
        }
        {penjuals.map((penjual) => (
          <PenjualCard key={penjual.id} image={penjual.gambar}  id={penjual.id} nama={penjual.nama} keterangan={penjual.keterangan} />
       
        ))}
        {
          isSearch && products.map((product) => (
            <ProductCard key={product.id} id={product.id} image={product.gambar} harga={product.harga} id={product.id} nama={product.nama} keterangan={product.keterangan} />
          ))
        }
         
        </Box>
      </Container>       
      
      </React.Fragment>
      
  
  )
}
