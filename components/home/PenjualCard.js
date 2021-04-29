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
    marginBottom:10
  },
  media: {
    height: 140,
  },
});

export default function PenjualCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href={"/penjuals/"+props.id}>
      <CardActionArea>
        
        <CardMedia
            className={classes.media}
            image={props.image}
            title="gambar penjual"
          />
    
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.nama}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.keterangan}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Link href={"/penjuals/"+props.id}>
            <Button size="small" color="primary">
              Lihat Etalase
            </Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}