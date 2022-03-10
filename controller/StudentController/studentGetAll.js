const {studentSchema}=require("../../database/model/StudentSchema");

const studentGetAll=async(req,res)=>{
    try {
        let tempData=await studentSchema.find({});
        res.status(200).json({"msg":"Get All Student","data":tempData});
    } catch (error) {
        res.status(400).json({"msg":"There is error in reading all data"});
    }
}


module.exports={studentGetAll};