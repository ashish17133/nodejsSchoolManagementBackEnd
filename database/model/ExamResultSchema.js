const mongoose=require("mongoose");

const subjectResult=new mongoose.Schema({
    "subjectName":{
        type:String,
    },
    "markObtain":{
        type:String,
    }
},{_id:false});
const examResultSchema=new mongoose.Schema({
    "studentId":{type:String},
    "result":[subjectResult]
},);

const examResult=mongoose.model("examResult",examResultSchema);
module.exports={examResult};
