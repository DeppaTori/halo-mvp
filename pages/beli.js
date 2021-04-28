import React from 'react';
import Link from 'next/link'
import GenAppBar from '../components/general/GenAppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const Beli = ()=>{
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: 1,
        total: 20000,
        price: 20000,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const hitung = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value,['total']: event.target.value*values.price });
     //   setValues({ ...values, ['total']: values.amount*values.price });
      };

 
    
    return (
        <>
            <GenAppBar nama="Roti Enak" />
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
                <Link href="/notifikasi">
                    <Button variant="contained" color="primary">
                        Bayar
                    </Button>
                </Link>
               

                </Box>
                
            </Container>
           
        </>
    )
    
};


export default Beli;