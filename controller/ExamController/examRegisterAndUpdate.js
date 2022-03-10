const {examResult}=require("../../database/model/ExamResultSchema");
const {studentSchema}=require("../../database/model/StudentSchema");

const examResultRegister=async(req,res)=>{
    try {
        const tempExamData=await examResult.findOne({studentId:req.params.id});
        const tempStudentData=await studentSchema.findOne({studentId:req.params.id});
        if(tempStudentData){
        if(tempExamData){
            //check for subject(examUpdateHelperFunction(tempExamData.result,req.query.subject)it is an array) exist in the system ,,this help to minimize the duplicate creation of subject name
            if(await examUpdateHelperFunction(tempExamData.result,req.query.subject)){
              await examResult.findOneAndUpdate({studentId:req.params.id},{$pull:{result:{subjectName:req.query.subject}}});
            }

            
            //update code
            await examResult.findOneAndUpdate({studentId:req.params.id},{$push:{result:[{
                subjectName:req.query.subject,
                markObtain:req.query.mark
            }]}});
            res.status(200).json({"msg":"New Data updated to the table"});
        }else{
            //create new student exam table
        await examResult.create({
            studentId:req.params.id,
            result:[{
                subjectName:req.query.subject,
                markObtain:req.query.mark
            }
            ]
        });
        res.status(200).json({"msg":"Exam result Added to the table"});
    };
    }else{
        res.status(400).json({"msg":"No student found for given student Id"});
    }

    } catch (error) {
        console.log(error);
        res.status(400).json({"msg":"Error in creating exam result"});
    }
};


async function examUpdateHelperFunction (tempExamData,subject){
   for (let index = 0; index < tempExamData.length; index++) {
       const element = tempExamData[index];
       if(element.subjectName==subject){
        console.log(element);
        return true;
        
    } 
       
   }
       
              
   
   return false;
}

module.exports={examResultRegister};
