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
    marginBottom:10,
  },
  media: {
    height: 140,
  },
  teks: {
    color:"black"
  }
});

export default function ReklameCard({penjual}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2" className={classes.teks}>
            {penjual.nama}
          </Typography>
          <CardMedia
          className={classes.media}
          image={penjual.gambar}
          title="Papan Reklame"
        />
        </CardContent>
      </CardActionArea>
  
    </Card>
  );
}