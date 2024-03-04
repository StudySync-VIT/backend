const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./db/connect');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    
  } catch (error) {
      console.log(error)
  }