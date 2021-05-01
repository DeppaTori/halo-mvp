import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StarIcon from '@material-ui/icons/Star';
import PeopleIcon from '@material-ui/icons/People';
import StoreIcon from '@material-ui/icons/Store';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LaporanCard() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StoreIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="50" secondary="Transaksi" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="150" secondary="Pengunjung" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MonetizationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Rp. 3.500.000" secondary="Total Penjualan" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StarIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Kopi Hitam" secondary="Item paling banyak terjual" />
      </ListItem>
    </List>

    
  );
}
