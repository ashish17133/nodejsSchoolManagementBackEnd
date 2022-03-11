const {studentSchema}=require("../../database/model/StudentSchema");

const studentUpdate=async(req,res)=>{
    try {
        let tempData=await studentSchema.findOne({studentId:req.params.id});
       console.log(tempData);
        if(tempData){
        let field=req.query.field;
        let value=req.query.value;
        
        field=="address"?await studentSchema.findOneAndUpdate({studentId:req.params.id},{address:value}):"";
        field=="firstName"?await studentSchema.findOneAndUpdate({studentId:req.params.id},{firstName:value}):"";
        field=="lastName"?await studentSchema.findOneAndUpdate({studentId:req.params.id},{lastName:value}):"";
        field=="dob"?await studentSchema.findOneAndUpdate({studentId:req.params.id},{dob:value}):"";
        field=="classLevel"?await studentSchema.findOneAndUpdate({studentId:req.params.id},{classLevel:value}):"";
        field=="parentName"?await studentSchema.findOneAndUpdate({studentId:req.params.id},{parentName:value}):"";
        field=="role"?await studentSchema.findOneAndUpdate({studentId:req.params.id},{role:value}):"";
        field=="email"?await studentSchema.findOneAndUpdate({studentId:req.parmas.id},{email:value}):"";
        field=="phoneNumber"?await studentSchema.findOneAndUpdate({studentId:req.params.id},{phoneNumber:value}):"";
        tempData=await studentSchema.findOne({studentId:req.params.id}); 

        res.status(200).json({"msg":"New Update Done","data":tempData});
        }else{
            res.status(400).json({"msg":"No data found for given student Id"});
            return;
        }
    } catch (error) {
        console.log("error in updating student"+error);
        res.status(400).json({"msg":"There is error in creating student"});
    }
}


module.exports={studentUpdate};