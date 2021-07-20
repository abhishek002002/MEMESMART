import React, { Fragment, useEffect, useState } from 'react'
import Editmemes from "./editmeme";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import MemeCard from"./memecard";

const useStyles = makeStyles((theme) => ({
    btnstyle: {
        margin: '8px 0'
    },

    button: {
        margin: theme.spacing(1),
    },
    alignment: {
        justifyItems: 'center'
    },
    btn: {
        backgroundColor: 'DodgerBlue', /* Blue background */
        border: 'none', /* Remove borders */
        color: 'white', /* White text */
        fontSize: '21px', /* Set a font size */
        cursor: 'pointer', /* Mouse pointer on hover */
        "&:hover":{   
            backgroundColor: 'RoyalBlue'
        },
        borderRadius: '4px',
        marginLeft: '60px',
        padding: '4px 12px 2px 12px',
    },
}));
export default function Listmemes() {
    const [memes, setMemes] = useState([]);
    const classes = useStyles();
    const deleteMeme = async id =>{
        try{
           const deleteMeme = await fetch(`http://localhost:5000/memes/${id}`,{
               method: "DELETE"
           });
           setMemes(memes.filter(meme => meme.meme_id!==id));
           console.log(deleteMeme);
        }catch(err){
            console.error(err.message);
        }
    }

    const getmemes = async () => {
       try {
        const response = await fetch("http://localhost:5000/memes");
        const jsonData = await response.json();
        setMemes(jsonData);
        // console.log(jsonData);
       } catch(err){
           console.error(err.message);
       }
    };
    useEffect(()=>{
        getmemes();
    }, []);
    console.log(memes);

    const getMemeCard = (meme) => {
        return (
            <Fragment>
            <Grid item xs = {12} sm = {6} lg = {4} >
                <MemeCard meme={meme}/>
                <Grid container justify="center">
                <Editmemes meme={meme}/>
                <button type="button" onClick={()=> deleteMeme(meme.meme_id)} className={classes.btn}>
                    <span className="glyphicon glyphicon-trash"></span>Delete
                </button>
            </Grid>
            </Grid>
            </Fragment>
        );
    }
    
    return(
        <Grid container spacing={2}>
            {   // eslint-disable-next-line
                memes.sort((a,b) => (a.meme_id<b.meme_id)?1:-1),
                memes.map(meme => getMemeCard(meme))
            }
        </Grid>
    );
}

