import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  row:{
    backgroundColor:'red'
  }
});

function createData(nomor, status, time, jml, total, pembeli) {
  return { nomor, status, time, jml, total, pembeli };
}

const rows = [
  createData('HG/1901/R/20/21', 'new order','19.34', 2, '20.000', 'John'),
  createData('HG/11/C/20/21', 'on process','19.30', 10, '254.000', 'Kimberly'),
  createData('HG/200/R/20/21', 'done','19.28', 5, '154.000', 'Tom'),
  createData('HG/80/B/20/21', 'done', '18.40', 1, '200.000', 'Scarlet'),
  createData('HG/9/R/20/21', 'done','18.31', 8, '90.000', 'Siara'),
];

export default function TransaksiTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No. Invoice</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Order Time</TableCell>
           
            <TableCell align="right">Total Produk</TableCell>
            <TableCell align="right">Total (Rp)</TableCell>
            <TableCell align="right">Pembeli</TableCell>
            <TableCell align="right">Action</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.nomor}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.jml}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.pembeli}</TableCell>
              <TableCell align="right"> Update Status </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
