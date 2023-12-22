const bodyParser = require('body-parser');
const express = require('express');
const connectDB = require('./config/connectDB.js');
const app  = express()
const cors  = require("cors")

app.use(bodyParser.json())

require('dotenv').config({path:"./config/config.env"})

// connectDB()


const fileRouter = require("./Routers/fileRouter.js");
const error = require('./middelware/error.js'); 


app.use(cors())
app.use('/api/v1',fileRouter)


app.use(error)

module.exports = app; 
 