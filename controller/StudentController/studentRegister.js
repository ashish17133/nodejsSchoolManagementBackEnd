const {studentSchema}=require("../../database/model/StudentSchema");

const studentRegister=async(req,res)=>{
    try {
        let tempData=await studentSchema.create({
           firstName:req.body.firstName,
           lastName:req.body.lastName,
           dob:req.body.dob,
           classLevel:req.body.classLevel,
           password:req.body.password,
           address:req.body.address,
           parentName:req.body.parentName,
           role:req.body.role,
           email:req.body.email,
           phoneNumber:req.body.phoneNumber 
        });

        res.status(200).json({"msg":"New Student Created","data":tempData});
    } catch (error) {
        console.log("error in creating student"+error);
        res.status(400).json({"msg":"There is error in creating student"});
    }
}


module.exports={studentRegister};