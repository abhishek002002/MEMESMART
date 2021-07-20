import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    bottom: 0,
    alignItems: 'center',
    marginTop: '100px'
  },
  title: {
    justifyContent: 'center',
    fontSize: 'large'
  },
  header: {
    backgroundColor: "black",
    color: "white",
    maxHeight: '100px'
  },
  logo: {
    fontSize: 'large',
    margin: 'auto 5px'
    
  },
  button: {
    margin: theme.spacing(1),
  },
  developer: {
    color: 'white',
    margin: 'auto 10px'
  },
  social: {
    margin: '-10px 5px',
    color: 'white'
  }
}));




export default function FooterC() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className = {classes.header}>
          <Toolbar className = {classes.title}>
                <div>
                    Made with 
                    <FavoriteIcon className={classes.logo}/>
                        by Abhishek Agrawal
                        <a href = "https://www.linkedin.com/in/-abhishekagrawal/" target = '_'><LinkedInIcon fontSize = "large" className = {classes.social} /></a>
                        <a href = "https://github.com/abhishek002002" target ='_'><GitHubIcon fontSize = "large" className = {classes.social}/></a>
                        <a href = "mailto:genialabhishek@gmail.com" target = '_' ><MailIcon fontSize = "large" className = {classes.social} /></a>
                </div>
            </Toolbar>
      </AppBar>
    </div>
  );
}






