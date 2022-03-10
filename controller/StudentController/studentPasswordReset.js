
const studentPasswordResetController=(req,res)=>{
    console.log(req.params.id);
    res.status(200).json({"msg":"This is test for student password Reset Controller"});
}


module.exports={studentPasswordResetController};

