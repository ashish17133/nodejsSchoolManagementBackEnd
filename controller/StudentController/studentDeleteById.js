const {studentSchema}=require("../../database/model/StudentSchema");

const studentDelete=async(req,res)=>{
    try {
        let tempData=await studentSchema.findOneAndDelete({studentId:req.params.id});
        if(!tempData){res.status(400).json({"msg":"No data found for given student Id"});return;};
        res.status(200).json({"msg":"Student Deleted","data":tempData});
    } catch (error) {
        console.log("error in creating student"+error);
        res.status(400).json({"msg":"There is error in creating student"});
    }
}


module.exports={studentDelete};