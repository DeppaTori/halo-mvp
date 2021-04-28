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
    backgroundImage: `url(${"/others/welcome.jpg"})`
  },
  media: {
    height: 40,
  },
  teks: {
    color:"white"
  }
});

export default function WelcomeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        //  image="/others/welcome.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2" className={classes.teks}>
            Hello, Guest!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.teks}>
            Selamat datang di acara Konser Maut Goyang Nyeburr
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>
  );
}