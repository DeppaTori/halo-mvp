import React,{ useState } from 'react';
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
  const [defaultProducts,setDefaultProducts] = useState(productFilteredByPenjual); 
  const [products,setProducts] = useState(productFilteredByPenjual); 
  const [totalSearch,setTotalSearch] = useState(0);
  const [isSearch,setIsSearch] = useState(false);

  const filterContent = (e)=>{
    if(e.target.value.length > 0){
      const hasilSearch = defaultProducts.filter((product)=>product.nama.search(new RegExp(e.target.value, 'gi')) >= 0);
      setTotalSearch(hasilSearch.length);
      setProducts(hasilSearch);
      setIsSearch(true);
    }else{
      setProducts(defaultProducts);
      setTotalSearch(0);
      setIsSearch(false);
    }
    
  }

  return (

    <React.Fragment>
       <CssBaseline />
 
      <PenjualAppBar filterContent={filterContent} />
      <ReklameCard penjual={penjualData} />
      <Container>
        <Box my={2}>
        { isSearch  &&
          <h2>{totalSearch} hasil pencarian</h2>
        }
        
        {products.map((product)=>
          <ProductCard key={product.id} id={product.id} image={product.gambar} harga={product.harga} id={product.id} nama={product.nama} keterangan={product.keterangan} />
         
        )}
      
 
        </Box>
      </Container>       
      
      </React.Fragment>
      
  
  )
}
