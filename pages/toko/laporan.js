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

const LaporanCard = dynamic(
    () => import('../../components/toko/LaporanCard'),
    { ssr: false }
)

const Laporan = ()=>{
    return (
        <>
        <GenAppBar nama="Laporan" />
            <Container>
                <Box my={2}>
           
                    <LaporanCard />
                  
                    <Link href="/toko/manage-toko">
                        <Button variant="contained" color="primary">
                            Kembali ke Manage Toko
                        </Button>
                    </Link>
                </Box>
            </Container>
        </>
    )
};

export default Laporan;