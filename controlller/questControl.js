const Question=require('../model/questionSch');
const Option=require('../model/optionSch');
// const Poll = require("../model/pollSch");

module.exports.create=async function(req,res){
//  in this the question are created
    console.log(req.url);
    console.log(req.body);
    const {title} = req.body;
try{
    const question = new Question({title}); // creating instance of schema
    // await Question.create(req.body){
    //         if(err){console.log("error in creating the question schema",err);}
    const questionSave = await question.save(); //save return promise so we have to use await 

        if(questionSave){
            res.status(201).json({message : "question saved successfuly",question_id : question._id})
        }else {
           res.status(500).json({error : "failed to save"})
        }

        // console.log(ques);
        // res.send(ques);
}catch(err) {
    console.log(err);
}
}
// }

module.exports.showDetails=async function(req,res){
        console.log(req.params.id)

        const ques=await Question.findById(req.params.id);
       

        if(ques){
            await ques.populate('option');
            res.send(ques);
        }
        // handling the bad requests if that id does not exist
        else{
            res.send("id does not exits");
        }

    
    // in this the details about the question is displayed
}

// module.exports.deleteQues=async function(req,res){
//     // in this the question will be deleted
//         const ques= await Question.findById(req.params.id).catch(function(err){ console.log(err)})
//         if(ques){

//             // delete all the option ⁉️ of the option db having the question id as the req.params.id
//             await Question.deleteOne({ _id: req.params.id }).catch(function(err){ console.log(err)})
//             // deleting all the option of that question
//             await Option.deleteMany({question:req.params.id}).catch(function(err){ console.log(err)})
//                 res.send("ques deleted");
    
//         }
//         //  if th at question of the given id does not exists then just sending a message
//         else{
//             res.send('question does not exists')
//         }
        
// }

module.exports.deleteQues = async function (req, res) {
    try {
      // Find the question with the given id
      const ques = await Question.findById(req.params.id);
      if (!ques) {
        return res.send('Question does not exist');
      }
  
      // Check if any associated options have votes
      const optionsWithVotes = await Option.find({ question: req.params.id, vote: { $gt: 0 } });
  
      if (optionsWithVotes.length > 0) {
        return res.send('Cannot delete the question because it has associated options with votes.');
      }
  
      // If there are no associated options with votes, proceed with deletion
      // Delete the question
      await Question.deleteOne({ _id: req.params.id });
  
      // Delete all the options of that question
      await Option.deleteMany({ question: req.params.id });
  
      res.send('Question and associated options deleted');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while deleting the question');
    }
  };
  
