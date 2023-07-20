const express=require('express')
const mainrouter=express.Router()

// this is the entry point of all the api named url's
console.log("i m in");
const mainRouter2 = require('./api/index');
mainrouter.use('/api',mainRouter2);

module.exports=mainrouter;