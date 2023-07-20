const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const server =express();

const pRRoutes = require('./routes/index');

//connection
dotenv.config({path:'./config.env'}); //path of config.env file (written only one time only in index.js file and process.env can be fetched from anywhere in this project)

const PORT = process.env.PORT;

//models
require("./model/dbConn");

//Middleware
server.use(express.json()); //any data comes in form of json then convert it into  object and show me 

server.use('/',pRRoutes);


server.listen(PORT,()=>{
    console.log(`server started on port number ${PORT}`);
});