const english = require("../model/engRadio")
require("dotenv").config()
const axios = require("axios")
const counterModel = require("../model/listenersModel")
const url = process.env.RADIO_ENG_URL;
const getAll = async(req, res)=>{
    try{
        const all =  await english.find()
        res.status(200).json({
            status:"All Data in the HUB",
            data:all
        })
    }catch(err){
        console.log(err.message);
    } 
}


const updateEntry = async (numb, id) => {
  const getApi = await axios.get(url);
  const dataINeed = getApi.data;

  // now store the parts of the data you need in a variable so you can use them in the course of this iteration
  const station = dataINeed.station.name;
  const live = dataINeed.live.is_live;
  const counts = dataINeed.listeners.current;
  console.log(numb);
  while (numb < counts) {
    console.log(counts);
    await counterModel.findByIdAndUpdate(
      id,
      {
        $push: { currentListeners: counts },
      },
      { new: true }
    );
  }
};


const createEntry = async(req, res)=>{
    try{
  
        const get =  await axios.get(url);
       const api = await get.data;
       console.log(api.live.is_live);
      //  const exist = english.find({title:api.now_play ing.song.title}) 
           const station = api.station.name;
           const live = api.live.is_live;
           const online = api.is_online;
           const counter = api.listeners.current;
           const title = api.now_playing.song.title;
          const metaData = {
            title: title,
            station: station,
            live: live,
            countNow: counter,
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString()
          };

          while(live){
          const creates = await english.create(metaData).then((data) => {
            console.log(data);
            console.log("This is where we are going to be updating the data");
          const dataId = data._id;
            const numb = data.countNow;
            console.log(dataId);

           updateEntry(numb, dataId);
          });
          
          break
          }
          // res.status(201).json({
          //   status: "created successfully",
          //   data: creates,
          // });
            // console.log("Sorry we aren't live yet");
         
    }catch(err){
        console.log(err.message);
    }
}
module.exports={createEntry, getAll, updateEntry}
console.log(createEntry());