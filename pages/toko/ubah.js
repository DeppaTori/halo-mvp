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

const FormUbah = dynamic(
    () => import('../../components/toko/FormUbah'),
    { ssr: false }
)

const Ubah = ()=>{
    return (
        <>
        <GenAppBar nama="Ubah Informasi Toko" />
            <Container>
                <Box my={2}>
                    <FormUbah />
                    <Link href="/toko/manage-toko">
                        <Button variant="contained" color="primary">
                            Simpan
                        </Button>
                    </Link>
                    <br/>
                    <br/>
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

export default Ubah;