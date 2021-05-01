import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(nama, stok, harga, carbs, protein) {
  return { nama, stok, harga, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 20000, 24, 4.0),
  createData('Ice cream sandwich', 237, 30000, 37, 4.3),
  createData('Eclair', 262, 12500, 24, 6.0),
  createData('Cupcake', 305, 39000, 67, 4.3),
  createData('Gingerbread', 356, 53000, 49, 3.9),
];

export default function BarangTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nama Produk</TableCell>
            <TableCell align="right">Stok</TableCell>
            <TableCell align="right">Harga</TableCell>
            <TableCell align="right">Action</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.nama}
              </TableCell>
              <TableCell align="right">{row.stok}</TableCell>
              <TableCell align="right">{row.harga}</TableCell>
              <TableCell align="right">Ubah | Hapus </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
