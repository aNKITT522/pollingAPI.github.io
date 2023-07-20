const Option=require('../model/optionSch');
const Question= require('../model/questionSch');
module.exports.create=async function(req,res){
    // in this we will create the options to the id given question 
    console.log(req.body,req.params.id);
   
        
    const opt=await Option.create({
        option:req.body.content,
        question:req.params.id,
        // 
    })
    console.log("opy.id is -->"+opt.id);
    // it is for adding the vote to option of the id that is given by mongodb by update query and using the string interpolition
    const updateOpt=await Option.findByIdAndUpdate(opt.id,{"add_vote":`http://localhost:8000/api/v1/options/${opt.id}/add_vote`});
    

    try {
    const ques=await Question.findById(req.params.id);
    if(ques){
        console.log(updateOpt +" And ques id --> "+ ques);
     ques.option.push(updateOpt);
    await ques.save()
    console.log(ques)
    res.send(ques) 

    }
    else{
        res.send('question does not exists')
    }

} catch (error) {
        res.send("eeror in creating options"+error);
}
    
}

module.exports.add_vote=async function(req,res){
    // in this votes will be added to the particular option of the question
    console.log(req.params.id)
    // this the increment query in which the vote is incremented by one 
    const opt=await Option.findByIdAndUpdate(req.params.id,{ $inc: { vote: 1 }})
    if(opt){
        await opt.save();
        console.log(opt);
        res.send(opt)
    }
    // handling the bad requests
    else{
        res.send('option does not exits')
    }
    
}

module.exports.delete=async function(req,res){
    // delete the id option 
    console.log('id',req.params.id);
    const opt=await Option.findById(req.params.id);
    if(opt){
        if(opt.vote==0){
        const quesId=opt.question;
        // finding the question to which the option is deleted and removing that option from its option array
        const ques=await Question.findByIdAndUpdate(quesId,{$pull:{options:req.params.id}});
        // now absolutely deleting that option
        await Option.findByIdAndDelete(req.params.id)

        console.log(ques);
        res.send('option deleted')
    }else{
        res.send('option can not be deleted as it as some votes')
    }
}
    // handling the bad request
    else{
        res.send('id not exists')
    }
}
