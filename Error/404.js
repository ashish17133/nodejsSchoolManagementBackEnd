const errorPage=(req,res)=>{
res.status(400).json({"msg":"Page not found"});
}


module.exports={errorPage}