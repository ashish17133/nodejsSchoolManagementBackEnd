


const adminPasswordResetController=(req,res)=>{
    console.log(req.params.id);
    res.status(200).json({"msg":"This is test for admin password Reset Controller"});
}


module.exports={adminPasswordResetController};

