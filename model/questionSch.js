const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    
    option: {
        type: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option',
          },
        ],
        default: [], // Set the default value as an empty array
      },

})

const Question=mongoose.model('Question',questionSchema)
module.exports=Question
