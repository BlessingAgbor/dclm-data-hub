 const axios = require("axios")

const fs = require("fs")
const radio_eng_url = "https://stat1.dclm.org/api/nowplaying/1";

// I want to create a loop that iterates through the message listeners

// for()


const english = async ()=>{
    const api = await axios.get(radio_eng_url)
    const data = await api.data;
    const live = data.is_online;
    const name =data.station.name;
    const title = data.now_playing.song.title
    const file = `${name}.json`
    const exist = fs.existsSync(file);
    const listeners = data.listeners.current
    // if(live){
        if(!exist){
            while(live){
                newData = {
                  data: {
                    id: Math.ceil(Math.random() * 1000),
                    station: `${name}`,
                    message: `${title}`,
                    listeners: `${listeners}`,
                    live: `${live}`,
                  },
                };
                const metaData =JSON.stringify(newData)
                
                const newEntry = fs.writeFileSync(file, metaData)
                return newEntry
            }
                        const check = await file.findById(newEntry.data.id)
                        if(listeners>check.listeners ){
                          // In this block there should be a code that will update the number of listenres f the condition is set to true.  
                          // This can be achieved by using an fs module to initiate that update it in the file or push it to an array and consecutively and update that file with the upated number

                          // after this is done and live is set to false we are expected to use that data to create an entry in mongodb and then move on to tghe next thing 
                        
                        }else{
                          // Here we are to have the the file remain the way it was created
                        }
        }else if(file.length>=1 ){
             while(live){
                newData = {
                  data: {
                    id: Math.ceil(Math.random() * 1000),
                    station: `${name}`,
                    message: `${title}`,
                    listeners: `${listeners}`,
                    live: `${live}`,
                  },
                };
                const metaData = JSON.stringify(newData);
                // const entr = fs.writeFileSync(
                //   `${data.station.name}.json`,
                //   JSON.stringify(file),
                //   "utf-8",
                //   (error) => {
                //     if (error) {
                //       console.log(error.message);
                //     }
                //   }
                // ); 
                const entry = fs.appendFileSync(file,
                   metaData,
                    "utf-8",
                  (error) => {
                    if (error) {
                      console.log(error.message);
                    }
                  }
                  )
                return entry
        }
    }
    // else{

    // }
}
// fs.truncate

console.log(english())
module.exports={
    english
}