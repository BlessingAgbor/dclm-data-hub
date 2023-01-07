const mongoose = require("mongoose")
mongoose.connect("localhost://radio").then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})
const express = require("express")
const port  =2000;
const english = require("../try4")
const app= express()
app.use(express.json())


app.listen(port, ()=>{
    console.log("Connected successfully");
    english()
})