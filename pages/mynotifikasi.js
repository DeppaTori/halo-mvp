import React from 'react';
import GenAppBar from '../components/general/GenAppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';

const NotifikasiCard = dynamic(
    () => import('./../components/notifikasi/NotifikasiCard'),
    { ssr: false }
)

const MyNotifikasi = ()=>{
    const total = useSelector((state)=>state.notifikasi.total);
  
    return (
        <>
          <GenAppBar nama="Notifikasi" />
            <Container>
                <Box my={2}>
                    {total>0 &&
                        <NotifikasiCard />
                    }
                    {total===0 &&
                        <p>Anda tidak memiliki notifikasi.</p>
                    }
                   
                   
              
               
                </Box>
            </Container>
        </>
    )
}

export default MyNotifikasi;