const nodemailer = require("nodemailer");
const {emailId,password}=require("../gmailUser");

 const testEmailSender=async(req,emailid,token,api)=>{
  
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: emailId,
      pass: password, 
    },
  });

  let info = await transporter.sendMail({
    from: '"noReply" <foo@example.com>', // sender address
    to: emailid, // list of receivers
    subject: "Password Reset Link From E-Commerce Website", // Subject line
    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
    'http://' + req.headers.host + '/api/v1/'+api+'/reset/' + token + '\n\n' +
    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
, // plain text body
    
  });
  
 }


  module.exports={testEmailSender};