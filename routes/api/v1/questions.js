
const express=require('express');
const qRouter=express.Router();
const question_controller=require('../../../controlller/questControl');

qRouter.post('/create',question_controller.create);
qRouter.get('/view/:id',question_controller.showDetails);
qRouter.delete('/delete/:id',question_controller.deleteQues);
const option = require('./options');
qRouter.use('/options',option);


module.exports=qRouter;