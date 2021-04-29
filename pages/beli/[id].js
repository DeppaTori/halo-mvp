import Link from 'next/link'
import React from 'react';
import { getAllProductIds, getProductData } from '../../lib/products'
import GenAppBar from '../../components/general/GenAppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { tambah } from './../../redux/cart/cartSlice';

export async function getStaticProps({ params }) {
  const productData = getProductData(params.id)
  return {
    props: {
      productData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllProductIds()
  return {
    paths,
    fallback: false
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const Beli = ({ productData })=>{
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
      amount: 1,
      total: productData.harga,
      price: productData.harga,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const hitung = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value,['total']: event.target.value*values.price });
    };


    return (
        <>
             <GenAppBar nama={productData.nama} />
            <Container>
                <Box my={2}>

                <FormControl fullWidth className={classes.margin} disabled>
                    <InputLabel htmlFor="standard-adornment-amount">Harga</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={values.price}
                     
                        startAdornment={<InputAdornment position="start">Rp.</InputAdornment>}
                    />
                </FormControl>
                    
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">Jumlah</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={values.amount}
                        onChange={hitung('amount')}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                    />
                </FormControl>
                <FormControl fullWidth className={classes.margin} disabled>
                    <InputLabel htmlFor="standard-adornment-amount">Total</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={values.total}
                 
                        startAdornment={<InputAdornment position="start">Rp.</InputAdornment>}
                    />
                </FormControl>
                {/* <Link href="/notifikasi"> */}
                <Link href="/">
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={()=>dispatch(tambah({
                        id:productData.id,
                        harga:values.price,
                        total:values.amount,
                        nama:productData.nama
                      }))}
                      >
                        Tambah ke Keranjang
                    </Button>
                </Link>
               

                </Box>
                
            </Container>
        </>
    )
}

export default Beli;