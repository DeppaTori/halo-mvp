import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PickupCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/others/map.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gerobak Roti
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pesanan anda siap ambil.
            <div>
              <b>
              Jarak : 300 m
              </b>
            </div>
            <div>
             <br/>
              Pesanan : <br/>

              1 x Roti <br/>
              10 x Bakwan <br/>

             
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="/">
          <Button size="large" color="primary">
              Selesai
            </Button>
      </Link>
        
       
      </CardActions>
    </Card>
  );
}