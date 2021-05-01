import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const GenAppBar = dynamic(
    () => import('../../components/general/GenAppBar'),
    { ssr: false }
)

const FormTambahBarang = dynamic(
    () => import('../../components/toko/FormTambahBarang'),
    { ssr: false }
)

const BarangTambah = ()=>{
    return (
        <>
        <GenAppBar nama="Tambah Produk" />
            <Container>
                <Box my={2}>
                    <FormTambahBarang />
                    <Link href="/toko/barang">
                        <Button variant="contained" color="primary">
                            Simpan
                        </Button>
                    </Link>
                    <br/>
                    <br/>
                    <Link href="/toko/barang">
                        <Button variant="contained">
                            Kembali ke Daftar Produk
                        </Button>
                    </Link>
                  
               
                </Box>
            </Container>
        </>
    )
};

export default BarangTambah;