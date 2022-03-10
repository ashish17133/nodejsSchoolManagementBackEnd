const express = require('express');
const morgan=require("morgan");
const mongoose = require('mongoose');
const app=express();
const {errorPage}=require("./Error/404");
const {databaseurl}=require("./database/databaseUrl");
const {routeHome}=require("./route/homePageRoute/homeRoute");
const {routeAdmin}=require("./route/AdminRoute/adminRoute");
const {routeStudent}=require("./route/StudentRoute/routeStudent");
const {routeExam}=require("./route/ExamResultRoute/examRoute");
app.use(morgan("tiny"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//home api controller
app.use("/",routeHome);
//admin api end point
app.use("/api/v1/admin",routeAdmin);
//student api end points
app.use("/api/v1/student",routeStudent);
//exam Route api goes here
app.use("/api/v1/exam",routeExam);

app.use(errorPage);

mongoose.connect(databaseurl).then(()=>{
  
    console.log("Database Connection Successful");
    app.listen(8080,()=>{
        console.log("Server started");
        })
}).catch((error)=>{
    console.log("Error in connecting to database"+error);
})
