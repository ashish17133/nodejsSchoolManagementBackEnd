const {adminSchema}=require("../../database/model/AdminSchema");
const {AdminUser}=require("../../model/Admin");




const adminUpdateController=async(req,res)=>{
    try {
        const adminId=req.params.id;
        const field=req.query.field;
        const value=req.query.value;
        console.log(req.params.id,req.query.field,req.query.value);
        const data=await adminSchema.findOne({adminId:`${adminId}`});
        if(data){
            field=='firstname'?await adminSchema.findOneAndUpdate({adminId:adminId},{firstname:value}):"";
            field=='lastname'?await adminSchema.findOneAndUpdate({adminId:adminId},{lastname:value}):"";
            field=='dob'?await adminSchema.findOneAndUpdate({adminId:adminId},{dob:value}):"";
            field=='qualification'?await adminSchema.findOneAndUpdate({adminId:adminId},{qualification:value}):"";
            field=='email'?await adminSchema.findOneAndUpdate({adminId:adminId},{email:value}):"";
            field=='phoneNumber'?await adminSchema.findOneAndUpdate({adminId:adminId},{role:phoneNumber}):"";
            field=='role'?await adminSchema.findOneAndUpdate({adminId:adminId},{role:value}):"";
            res.status(200).json({"msg":"This is update control pannel"});
            }else{
                res.status(400).json({"msg":"No data found for given id"});
                return;
            };

        
    } catch (error) {
        console.log(error);
        res.status(400).json({"msg":"There is error in updating data"});
    }
}


module.exports={adminUpdateController}