const {adminSchema}=require("../../database/model/AdminSchema");
const {AdminUser}=require("../../model/Admin");

const adminRegisterController=async(req,res)=>{
    try {
        const data=await adminSchema.findOne({"email":req.body.email});
        if(data){res.status(200).json({"msg":"User Already registered"});return;};
        var tempData=await adminSchema.create({
          
           firstname:req.body.firstname,
            lastname:req.body.lastname,
            dob:req.body.dob,
            password:req.body.password,
            qualification:req.body.qualification,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email
        });
        res.status(200).json({"msg":"This is admin Registration Controller","data":tempData})
    } catch (error) {
        console.log(error);
        res.status(400).json({"msg":"Error in Creating admin"})
    }
   
}


module.exports={adminRegisterController}