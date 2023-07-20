const express=require('express')
const mainRouter3=express.Router()

// this is the entry point of all the api/v1/questions named url's
const question = require('./questions');
const option = require('./options');
mainRouter3.use('/question',question);
mainRouter3.use('/options',option)

module.exports=mainRouter3