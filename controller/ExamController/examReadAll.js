const {examResult}=require("../../database/model/ExamResultSchema");


const examResultGetAllById=async(req,res)=>{
    try {
        const tempExamData=await examResult.find({studentId:req.params.id});
        if(tempExamData.length==0){res.status(400).json({"msg":"No data found"});return;};
        res.status(200).json({"msg":tempExamData})
    }catch(error){
        res.status(400).json({"msg":"Error in reading data from exam database"});
    }
}

module.exports={examResultGetAllById};