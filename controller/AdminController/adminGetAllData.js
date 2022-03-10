const {adminSchema}=require("../../database/model/AdminSchema");

const adminGetAllData=async(req,res)=>{
try {
    var tempData=await adminSchema.find({});
    res.status(200).json({"msg":"All Admin Users","data":tempData});
} catch (error) {
    res.status(400).json({"msg":"Error in Reading admin Data"});
}
}


module.exports={adminGetAllData}