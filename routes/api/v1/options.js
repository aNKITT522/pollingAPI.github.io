const express=require('express');
const oRouter=express.Router();
const optionsController=require('../../../controlller/optControl');

oRouter.post('/:id/create',optionsController.create);
oRouter.get('/:id/add_vote',optionsController.add_vote);
oRouter.delete('/delete/:id',optionsController.delete);

module.exports=oRouter;