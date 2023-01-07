const radio_eng_url = "https://stat1.dclm.org/api/nowplaying/1";

const express = require("express");
const axios = require("axios");
const fs = require("fs")
const port = 2000;

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Welcome to DCLM counter app")
    res.end()
})



// app.listen(port, 
//     console.log("Server is connected successfully"),
//     async(req, res)=>{
//       let obj ={
//         na:"ghh",
//         mn:5,

//       }
//       let b=10;
//       for(a in obj){
//        fs.createWriteStream()
       
//       }
      

// })

app.listen(port, ()=>{
  console.log("Listening");
})



