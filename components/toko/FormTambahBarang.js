import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function FormTambahBarang() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Nama Produk"
          style={{ margin: 8 }}
          placeholder="Ice Cream"
         // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width1"
          label="Harga Produk"
          style={{ margin: 8 }}
          placeholder="Rp 50.000"
         // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width2"
          label="Stok Produk"
          style={{ margin: 8 }}
          placeholder="10"
         // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          id="standard-full-width3"
          label="Deskripsi Produk"
          style={{ margin: 8 }}
          placeholder="Dengan cream yang ..."
         // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-full-width4"
          label="Gambar Produk"
          style={{ margin: 8 }}
          placeholder="ice-cream.jpg"
         // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
       
      </div>
   
    </div>
  );
}
