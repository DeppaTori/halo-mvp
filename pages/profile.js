import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const GenAppBar = dynamic(
    () => import('../components/general/GenAppBar'),
    { ssr: false }
)

const Profile = ()=>{
    return (
        <>
        <GenAppBar nama="Profile" />
            <Container>
                <Box my={2}>
                    <p>Welcome, Howdy</p>
                    <Link href="/toko/manage-toko">
                        <Button variant="contained" color="primary">
                            Manage Toko
                        </Button>
                    </Link>
                  
               
                </Box>
            </Container>
        </>
    )
};

export default Profile;