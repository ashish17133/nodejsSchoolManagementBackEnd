const {studentSchema}=require("../../database/model/StudentSchema");

const studentGetById=async(req,res)=>{
    try {
        let tempData=await studentSchema.findOne({studentId:req.params.id});
        if(!tempData){res.status(400).json({"msg":"No data found for given Id"});return;};

        res.status(200).json({"msg":"Get All Student","data":tempData});
    } catch (error) {
        res.status(400).json({"msg":"There is error in reading all data"});
    }
}


module.exports={studentGetById};