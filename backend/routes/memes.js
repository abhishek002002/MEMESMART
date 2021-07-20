const router = require('express').Router();
const pool = require('../db');

router.get('/',async(req,res)=>{
    try{
        const memes = await pool.query('SELECT * FROM meme');
        res.json(memes.rows);
    }catch(err){
        console.error(err.massage);
    }
});
 
module.exports = router;