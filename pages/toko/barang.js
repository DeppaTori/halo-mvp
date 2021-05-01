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

const BarangTable = dynamic(
    () => import('../../components/toko/BarangTable'),
    { ssr: false }
)

const Barang = ()=>{
    return (
        <>
        <GenAppBar nama="Daftar Produk" />
            <Container>
                <Box my={2}>
                    <p>Total: 5 Produk 
                        
                    </p>
                    <p>
                    <Link href="/toko/barang-tambah">
                    <Button variant="contained" color="primary">
                            Tambah Produk
                        </Button>
                    </Link>
                    </p>
                    <BarangTable />
                    <Link href="/toko/manage-toko">
                        <Button variant="contained">
                            Kembali ke Pengaturan Toko
                        </Button>
                    </Link>
                  
               
                </Box>
            </Container>
        </>
    )
};

export default Barang;