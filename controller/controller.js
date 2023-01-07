const mongoose = require("mongoose")
require('dotenv').config()
const engRAdio = require("../model/engRadio")
const count = require("../model/listenersModel")

const axios = require("axios");
const engRadio = require("../model/engRadio");
const url = process.env.RADIO_ENG-URL
// Now let's create the functions for create and update

// First we want to create a function that will create when the radio is live and map the data into the database.

const createEntry =async(req, res)=>{
    const getApi = await axios.get(url)
    const dataINeed = getApi.data

    // now store the parts of the data you need in a varioble so you can use them in the course of this 
    const station = dataINeed.station.name
    const live= dataINeed.live.is_live
    const online = dataINeed.is_online;
    const counter = dataINeed.listeners.current;
    const title= dataINeed.now_playing.song.title
    

    try{
        if (live) {
      const metaData = {
        title: title,
        station: station,
        live: live,
        listener: counter,
      };
  const creates = engRAdio.create(JSON.stringify(metaData)).then(()=>{
    console.log("It has worked!!");
    updateEntry()
  });
  // So we have created an entry at this point but that's not all,
  // don't forget about the listeners
  // we still need to reference them

  const listen = creates.totalListeners;
  const counter = new count();
  creates.totalListeners = listenModel;
  creates.save();

  counter.listeners.push(listen);
  counter.save();
  res.status(201).json({ message: "new entry created", data: creates });
}
    }catch(err){
        console.log(err.message);
    }
}  

const updateEntry= async()=>{
   const getApi = await axios.get(url);
   const dataINeed = getApi.data;

   // now store the parts of the data you need in a varioble so you can use them in the course of this
   const station = dataINeed.station.name;
   const live = dataINeed.live.is_live;
   const counts = dataINeed.listeners.current;

while(live<counts){
       const update = await count.findByIdAndUpdate(
      req.params.post,
      {
        $push: { listeners: counts },
      },
      { new: true }
    );
    return update
}
 

 

}

module.exports = {createEntry, updateEntry}