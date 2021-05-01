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

export default function FormUbah() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Nama Toko"
          style={{ margin: 8 }}
          placeholder="Toko Hello Guest"
         // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          id="standard-full-width2"
          label="Deskripsi Toko"
          style={{ margin: 8 }}
          placeholder="Menyediakan segala macam makanan"
         // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-full-width3"
          label="Banner Toko"
          style={{ margin: 8 }}
          placeholder="Banner-toko.jpg"
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
