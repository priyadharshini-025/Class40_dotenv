const mongoose = require("mongoose");

//function to connect with 
const connectdb = async() =>{
    try{
        //connecting to mongodB using URL
        await mongoose.connect(process.env.MONGOURL)
    }
    catch(err)
    {
        console.log("Error while connecting with dB")
    }
}

module.exports = connectdb