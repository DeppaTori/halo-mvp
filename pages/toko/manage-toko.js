import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { fade, makeStyles } from '@material-ui/core/styles';

const GenAppBar = dynamic(
    () => import('../../components/general/GenAppBar'),
    { ssr: false }
)

const useStyles = makeStyles((theme) => ({
    tombol: {
        marginTop: theme.spacing(2)
    },
   
  }));

const ManageToko = ()=>{
    const classes = useStyles();
    return (
        <>
        <GenAppBar nama="Pengaturan Toko" />
            <Container>
                <Box my={2}>
                    <p>Selamat datang di pengaturan Toko</p>
                    <Link href="/toko/transaksi">
                        <Button variant="contained" color="primary">
                            Lihat Transaksi
                        </Button>
                    </Link>
                    <br/>
                    <Link href="/toko/barang">
                        <Button variant="contained" color="secondary" >
                            Lihat Produk
                        </Button>
                    </Link>
                    <br/>
                    <Link href="/toko/tokosaya">
                        <Button variant="contained" color="secondary" >
                            Kunjungi Toko Saya
                        </Button>
                    </Link>
                    <br/>
                    <Link href="/toko/laporan">
                        <Button variant="contained" color="secondary"  className={classes.tombol}>
                            Lihat Laporan Penjualan
                        </Button>
                    </Link>
                    <br/>
                    <Link href="/toko/ubah">
                        <Button variant="contained" color="secondary"  className={classes.tombol}>
                           Ubah Informasi Toko
                        </Button>
                    </Link>
                    <br/>
                    <Link href="/profile">
                        <Button variant="contained" className={classes.tombol}>
                            Kembali
                        </Button>
                    </Link>
                   
               
                </Box>
            </Container>
        </>
    )
};

export default ManageToko;