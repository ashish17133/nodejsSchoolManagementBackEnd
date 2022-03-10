const {adminSchema}=require("../../database/model/AdminSchema");
const {AdminUser}=require("../../model/Admin");
const {testEmailSender}=require("../../middleware/emailSender");
const adminForgotPasswordController=async(req,res)=>{

    try {
       let token="12344";
        let adminId=req.params.id;
        let tempData=await adminSchema.findOne({adminId:adminId});
        if(tempData){
        let emailId=tempData["email"];
        console.log(emailId);
        await testEmailSender(req,emailId,token,'admin');
        res.status(200).json({"msg":"Forgot password link sent to "+emailId});
        }else{
            res.status(400).json({"msg":"No data found for given Id"});
            return;
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({"msg":"Forgot link not working"});
    }

}



module.exports={adminForgotPasswordController};