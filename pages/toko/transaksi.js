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

const TransaksiTable = dynamic(
    () => import('../../components/toko/TransaksiTable'),
    { ssr: false }
)

const Transaksi = ()=>{
    return (
        <>
        <GenAppBar nama="Daftar Transaksi" />
            <Container>
                <Box my={2}>
                    <p>Total: 5 Transaksi 
                        
                    </p>
                    <p>
                    
                    </p>
                    <TransaksiTable />
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

export default Transaksi;