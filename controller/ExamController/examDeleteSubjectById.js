const {examResult}=require("../../database/model/ExamResultSchema");


const examResultDeleteSubjectById=async(req,res)=>{
    try {
        let tempData=await examResult.findOne({studentId:req.params.id});
        if(!tempData){res.status(400).json({"msg":"No data found for given student id"});return;}
        //check if subject name is present
        
        if(await examUpdateHelperFunction(tempData.result,req.query.field)){
        await examResult.findOneAndUpdate({studentId:req.params.id},{$pull:{result:{subjectName:req.query.field}}});
        res.status(200).json({"msg":"Student subject deleted"});
        }else{
            //if no subjectname is present
            res.status(400).json({"msg":"No Subject Found for given subject name"});
        }

    } catch (error) {
        res.status(200).json({"msg":"This is exam Delete subject By Id"});
    }
    
}
async function examUpdateHelperFunction (tempExamData,subject){
    for (let index = 0; index < tempExamData.length; index++) {
        const element = tempExamData[index];
        if(element.subjectName==subject){
         return true;
         
     } 
        
    }
        
               
    
    return false;
 }


module.exports={examResultDeleteSubjectById};