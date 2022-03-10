const mongoose = require('mongoose');

const adminScheema=new mongoose.Schema({
    "adminId":{
        type:String,
        required:true,
        default:Date.now
    },
    "firstname":{
        type:String,
        
    },
    "lastname":{
        type:String,
        
    },
    "dob":{
        type:Date,
        
    },
    "role":{
        type:String,
        default:2
        
    },
    "password":{
        type:String,
       
    },
    "qualification":{
        type:String,
        
    },
    "phoneNumber":{
        type:String,
       
    },
    "email":{
        type:String,
        require:true,
    }
    
})

const adminSchema=mongoose.model("AdminSchemas",adminScheema);
module.exports={adminSchema};
