import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { hapus, kosongkan } from './../redux/cart/cartSlice';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { tambah as notifikasiTambah } from './../redux/notifikasi/notifikasiSlice';

const GenAppBar = dynamic(
    () => import('../components/general/GenAppBar'),
    { ssr: false }
)

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
  
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }


const Cart = ()=>{
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state)=>state.cart.items);
    const totalPrice = useSelector((state)=>state.cart.totalPrice);
    const totalItem = useSelector((state)=>state.cart.totalItem);
    const bayarOnClick = ()=>{
      dispatch(kosongkan());
      dispatch(notifikasiTambah({
        id:1,
        penjualId:'penjual-makanan'
      }));
    }
    return (
        <>
             <GenAppBar nama="Keranjang Belanja" />
                <Container>
                    <Box my={2}>
                
                    <Typography variant="h6" className={classes.title}>
                        Daftar Belanja Anda: 
                    </Typography>
                 
                    <div className={classes.demo}>
                        <List dense={dense}>
                        {items.map((item) =>
                            <ListItem key={item.id}>
                            <ListItemAvatar>
                                <Avatar>
                                <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={(item.nama)+" x "+(item.total)+" = "+(item.total*item.harga)}
                              
                            />
                            <ListItemSecondaryAction>
                                <IconButton 
                                  edge="end" 
                                  aria-label="delete"
                                  onClick={()=>dispatch(hapus(item))}
                                  >
                                <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                            </ListItem>,
                            )}
                        </List>
                    </div>
                    <Typography variant="h8" className={classes.title}>
                        Jumlah Item: {totalItem} 
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Total: Rp. {totalPrice} 
                    </Typography>
                    {totalItem > 0 &&
                      <Link href="/payment">
                          <Button 
                            variant="contained" 
                            color="primary" 
                            // onClick={bayarOnClick}
                        
                            >
                              Bayar
                          </Button>
                      </Link>
                    }
                    
                
                    </Box>
                </Container>
        </>
       
    )
}

export default Cart;