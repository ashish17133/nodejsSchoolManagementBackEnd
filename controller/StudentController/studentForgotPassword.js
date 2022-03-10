const {studentSchema}=require("../../database/model/StudentSchema");
const {testEmailSender}=require("../../middleware/emailSender");
const studentForgotPassword=async(req,res)=>{
    try {
        const token="1234";
        let tempData=await studentSchema.findOne({studentId:req.params.id});
        if(!tempData){res.status(400).json({"msg":"No data found for given student Id"});return;};
        await testEmailSender(req,tempData["email"],token,'student');

        res.status(200).json({"msg":`Student Password Reset Link sent to ${tempData["email"]}`});
    } catch (error) {
        console.log("error in creating student"+error);
        res.status(400).json({"msg":"There is error in creating student"});
    }
}


module.exports={studentForgotPassword};