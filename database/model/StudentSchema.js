const mongoose = require('mongoose');
const studentScheema=new mongoose.Schema({
    "studentId":{
        type:String,
        default:Date.now
    },
    "firstName":{
        type:String,
        required:true
    },
    "lastName":{
        type:String,
    },
    "dob":{
        type:Date

    },
    "classLevel":{
        type:String,
    },
    "password":{
        type:String,
    },
    "address":{
        type:String,

    },
    "parentName":{
        type:String,
    },
    "role":{
        type:String,
        default:1,
    },
    "email":{
        type:String,
        required:true,
    },
    "phoneNumber":{
        type:String,
        required:true
    }
},{timestamps:true});

const studentSchema=mongoose.model("studentSchema",studentScheema);
module.exports={studentSchema};