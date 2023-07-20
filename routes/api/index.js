const express=require('express')
const mainRouter2=express.Router()

// this is the entry point of all the api/v1 named url's
const mainRouter3 = require('./v1/index');
mainRouter2.use('/v1',mainRouter3);

module.exports=mainRouter2