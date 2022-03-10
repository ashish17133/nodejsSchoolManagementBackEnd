const {examResult}=require("../../database/model/ExamResultSchema");


const examResultDeleteAllById=async(req,res)=>{
    try {
        let tempData=await examResult.findOneAndDelete({studentId:req.params.id});
        if(tempData){
        res.status(200).json({"msg":"Exam Result Deleted For Given Id"});
        }else{
        res.status(400).json({"msg":"No data found for given Id"});
        }
    } catch (error) {
        res.status(400).json({"msg":"Error in deleting data from exam table"});
    }
   
}


module.exports={examResultDeleteAllById};