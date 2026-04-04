const express = require("express")

const dotenv = require("dotenv")

const connectdB = require("./config/db")
const routes = require("./routes/userRoutes")

//import the env variables
dotenv.config()

connectdB()

//create the expres app
const app = express()

app.use(express.json())

//use the route
app.use("/",routes)

//start the server
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port")
})