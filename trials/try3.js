const fs = require("fs")
const radio_eng_url = "https://stat1.dclm.org/api/nowplaying/1";
const axios = require("axios")
const csv = require("json2csv")
// const main = async()=>{
//     const api = await axios.get(radio_eng_url)
//      const apiData =await api.data 
//      const station = apiData.station.name;
//      console.log(station);
//     const readStream = fs.createReadStream(
//       station

//     )
//     // const writeStream = fs.createWriteStream()
    
// }

// console.log(main())

// Node.js program to demonstrate the
// fs.createReadStream() method

// Include fs module

// Use fs.createReadStream() method
// to read the file
reader = fs.createReadStream(radio_eng_url, {
	flag: 'a+',
	encoding: 'UTF-8',
	start: 5,
	end: 64,
	highWaterMark: 16
});

// Read and display the file data on console
reader.on('data', function (chunk) {
	console.log(chunk);
});
