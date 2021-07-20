import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Img404 from './img404.png';
// import FormDialog from './FormDialog';


const useStyles = makeStyles((theme) =>({
  Card: {
    maxWidth: 500,
    backgroundColor: '#f0f8ff',
    margin: '10px auto',
  },
  Media: {
    height: '300px',
    width: 'auto',
  },
  Footer: {
    height: 40,
    margin: 5,

  },
  Caption: {
    height: 10,
  },  
  btnstyle: {
    margin: '8px 0'
  },
  button: {
    margin: theme.spacing(1),
  },
  alignment: {
    justifyItems: 'center'
  }
}));

export default function MemeCard({meme}) {
  const classes = useStyles();
  


//   console.log(meme);
  const author = meme.meme_author;
  const caption = meme.meme_caption;
  const url = meme.meme_url;
  return (
    <div>
    <Card className={classes.Card}>
      <CardActionArea>
        <div 
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <CardMedia className = {classes.Media}
            component="img"
            alt="Meme"
            src={url}
            onError={(e) => { e.target.onerror = null; e.target.src=Img404}}
          />
        </div>
        
        <CardContent className = {classes.Caption}>
          <Typography gutterBottom variant="h6" color="textSecondary" component="p">
            {caption}
          </Typography>
        </CardContent>
        <CardContent className = {classes.Footer}>
          <Typography variant="h6" component="em">
            -{author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
