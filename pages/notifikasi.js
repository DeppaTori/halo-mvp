import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

const GenAppBar = dynamic(
    () => import('./../components/general/GenAppBar'),
    { ssr: false }
)

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Notifikasi = ()=>{
    const classes = useStyles();

    return (
        <>
            <GenAppBar nama="Notifikasi" />
            <Container>
                <Box my={2}>
                <CardMedia
                    component="img"
                    alt="Sukses"
                    height="140"
                    image="/others/paymentsukses.jpg"
                    title="Sukses"
                />
                <Typography variant="h5" component="h2">
                Sukses! Pembayaran sudah kami terima.
                </Typography>
                <Typography variant="h8" component="p" color="textSecondary">
                Terima kasih untuk pembayarannya. Nota pembayaran akan dikirimkan ke email terdaftar Anda.
                </Typography>
         
                <Link href="/home">
                <Button color="primary">
                 Belanja lagi
                </Button>
                   
                </Link>
            
                </Box>
            </Container>
            
           
        </>
    )
}

export default Notifikasi;