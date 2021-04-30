import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Avatar from '@material-ui/core/Avatar';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { useRouter } from 'next/router';
import { tambah as notifikasiTambah } from './../../redux/notifikasi/notifikasiSlice';
import { hapus, kosongkan } from './../../redux/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function PaymentCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  const paymentOnClick = ()=>{
    
    dispatch(kosongkan());
      dispatch(notifikasiTambah({
        id:1,
        penjualId:'penjual-makanan'
    }));
    router.push("/notifikasi");
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            Silahkan pilih jenis pembayaran
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={paymentOnClick}>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText primary="HaloGuest Point" secondary="Your Balance: Rp. 100.000" />
      </ListItem>
      <ListItem button onClick={paymentOnClick}>
        <ListItemIcon>
        <Avatar variant="square" src="/payment/linkaja.jpg" />
        </ListItemIcon>
        <ListItemText primary="LinkAja" />
      </ListItem>
      <ListItem button onClick={paymentOnClick}>
        <ListItemIcon>
        <Avatar variant="square" src="/payment/ovo.jpg" />
        </ListItemIcon>
        <ListItemText primary="Ovo" />
      </ListItem>
      <ListItem button onClick={paymentOnClick}>
        <ListItemIcon>
        <Avatar variant="square" src="/payment/gopay.jpg" />
        </ListItemIcon>
        <ListItemText primary="GoPay" />
      </ListItem>
      <ListItem button onClick={paymentOnClick}>
        <ListItemIcon>
            <Avatar variant="square" src="/payment/bca.jpg" />
        </ListItemIcon>
        <ListItemText primary="BCA Internet Banking" />
      </ListItem>
      
    </List>
  );
}