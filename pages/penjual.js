import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';

const PenjualAppBar = dynamic(
  () => import('./../components/penjual/PenjualAppBar'),
  { ssr: false }
)

const ProductCard = dynamic(
  () => import('./../components/home/ProductCard'),
  { ssr: false }
)

const ReklameCard = dynamic(
  () => import('./../components/penjual/ReklameCard'),
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



export default function Home(props) {

  const classes = useStyles();

  return (

    <React.Fragment>
       <CssBaseline />
 
      <PenjualAppBar />
      <ReklameCard />
      <Container>
        <Box my={2}>
         
        <ProductCard image="/product/roti3.jpg" harga="40.000" nama="Bolu Wuenak" keterangan="Potongan segitiga yang sempurna yaitu segitiga sama kaki dengan taburan coklat dan satu buah ceri diatasnya" />
          <ProductCard image="/product/roti2.jpg" harga="55.000" nama="Donat Sedap" keterangan="Ketebalan roti dan bentuk bundaran yang sempurna buat menemani waktu berkumpul bersama kerabat" />
          <ProductCard image="/product/roti.jpg" harga="35.000" nama="Roti Enak" keterangan="Dengan taburan sereal dan garam secukupnya. Sedap untuk dinikmati bersama teman" />
        </Box>
      </Container>       
      
      </React.Fragment>
      
  
  )
}
