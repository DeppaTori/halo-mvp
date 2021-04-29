import React from 'react';
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

const PrimaryAppBar = dynamic(
  () => import('./../components/PrimaryAppBar'),
  { ssr: false }
)

const ProductCard = dynamic(
  () => import('./../components/home/ProductCard'),
  { ssr: false }
)

const WelcomeCard = dynamic(
  () => import('./../components/home/WelcomeCard'),
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



export default function Home(props) {

  const classes = useStyles();

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
 
      <PrimaryAppBar />
      <WelcomeCard />
      <Container>
        <Box my={2}>
          <ProductCard image="/product/roti.jpg" harga="35.000" nama="Roti Enak" keterangan="Dengan taburan sereal dan garam secukupnya. Sedap untuk dinikmati bersama teman" />
          <ProductCard image="/product/roti2.jpg" harga="55.000" nama="Donat Sedap" keterangan="Ketebalan roti dan bentuk bundaran yang sempurna buat menemani waktu berkumpul bersama kerabat" />
          <ProductCard image="/product/roti3.jpg" harga="40.000" nama="Bolu Wuenak" keterangan="Potongan segitiga yang sempurna yaitu segitiga sama kaki dengan taburan coklat dan satu buah ceri diatasnya" />
        </Box>
      </Container>       
      
      </React.Fragment>
      
  
  )
}
