const express = require('express')
const mongoose = require('mongoose')


const connectToMongo = async (connectionString) => {
    try {
      await mongoose.connect(connectionString);
      console.log('Connection successful');
    } catch (err) {
      console.log('Connection not successful', err);
    }
  };
  
  module.exports = connectToMongo;