const {adminSchema}=require("../../database/model/AdminSchema");
const {AdminUser}=require("../../model/Admin");

const adminDeleteController=async(req,res)=>{
    try {
        const deletedData=await adminSchema.findOneAndDelete({adminId:req.params.id});
        if(deletedData){
        res.status(200).json({
            "msg":"Delete controller working",
            "data":deletedData
        }); 
    }else{
        res.status(400).json({"msg":"No data found for deletion"});
    }
    } catch (error) {
        res.status(400).json({"msg":"Error in deleting data"});
    }
    

}




module.exports={adminDeleteController};