const {adminSchema}=require("../../database/model/AdminSchema");

const adminDataById=async(req,res)=>{
try {
    var tempData=await adminSchema.findOne({adminId:req.params.id});
    if(tempData){
    res.status(200).json({"msg":"All Admin Users","data":tempData});
    }else{
        res.status(400).json({"msg":"No data found for given admin Id"});
    }
} catch (error) {
    res.status(400).json({"msg":"Error in Reading admin Data"});
}
}


module.exports={adminDataById}