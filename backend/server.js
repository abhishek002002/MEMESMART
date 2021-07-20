const express = require('express');
const cors = require('cors');
const pool = require('./db');
const path = require("path");
const PORT = process.env.PORT || 5000;

const app=express();

app.use(cors());
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    //server static content
    //npm run build
    app.use(express.static(path.join(__dirname, "client/build")));
  }
  
console.log(__dirname);
console.log(path.join(__dirname, "client/build"));

// test connection with  backend 
app.get('/',async(req,res)=>{
   try{
     const memes = await pool.query('SELECT * FROM meme');
     res.json(memes.rows);
   }
    catch(err){
       console.error(err.message);
   }
});

//ROUTES

//DASHBOARD


//create a meme


app.post("/memes",async(req,res)=>{
    try{
      const { meme_author } = req.body;
      const { meme_url } = req.body;
      const { meme_caption } = req.body;
      const newMeme = await pool.query(
        "INSERT INTO meme (meme_author,meme_caption,meme_url) VALUES($1,$2,$3) RETURNING *",
        [meme_author,meme_caption,meme_url] 

      );
    // console.log(req.body);
      res.json(newMeme.rows[0]);
    }catch(err){
        console.error(err.message);
    }
});

//get all memes

app.get('/memes', async(req,res)=>{
  try{
      const allMemes = await pool.query("SELECT * FROM meme");
      res.json(allMemes.rows); 
  }catch(err){
      console.error(err.message);
  }
});

//get a meme
app.get("/memes/:id",async(req,res)=>{
    try{
        const { id } = req.params;
        const meme = await pool.query("SELECT * FROM meme WHERE meme_id = $1",[
            id
        ]);
        res.json(meme.rows[0]); 
    }catch(err){
        console.error(err.message);
    }
});

//update a meme

app.put("/memes/:id",async(req,res)=>{
   try{
       const { id } = req.params;
       const { meme_url } = req.body;
       const { meme_caption } = req.body;
       const updatememe = await pool.query(
         "UPDATE meme SET meme_caption = $1,meme_url = $2 WHERE meme_id=$3",
         [meme_caption,meme_url,id]
       );
       res.json("meme was updated");
   }catch(err){
       console.error(err.message);
   }
});

//delete a meme

app.delete("/memes/:id",async(req,res)=>{ 
   try{
       const { id } = req.params;
       const deletememe = await pool.query(
           "DELETE FROM meme WHERE meme_id = $1",[
            id
        ]);
        res.json("meme was deleted");
   }catch(err){
       console.error(err.message);
   }
});


app.listen(PORT,()=>{
    console.log(`Server is starting on port ${PORT}`);
});

// PG_USER = uipvzasarelgbz
// PG_PASSWORD = 0af383a9b98af9fc4719e9869e87a6374545e509b7a7e8e186a1f6aa75d9079e
// PG_DATABASE = dc1hdojrarv8jb
// PG_HOST = ec2-107-21-10-179.compute-1.amazonaws.com
// PG_PORT = 5432


