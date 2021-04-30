import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';

const GenAppBar = dynamic(
    () => import('./../components/general/GenAppBar'),
    { ssr: false }
)

const PaymentCard = dynamic(
    () => import('./../components/payment/PaymentCard'),
    { ssr: false }
)


const Payment = ()=>{
    return (
        <>
            <GenAppBar nama="Pembayaran" />
            <Container>
                <Box my={2}>
                    <PaymentCard />
                </Box>
            </Container>
        </>
    )
};

export default Payment;