const express = require('express');
const routeExam=express.Router();
const {examResultRegister}=require("../../controller/ExamController/examRegisterAndUpdate");
const {examResultGetAllById}=require("../../controller/ExamController/examReadAll");
const {examResultDeleteAllById}=require("../../controller/ExamController/examDeleteAllById");
const {examResultDeleteSubjectById}=require("../../controller/ExamController/examDeleteSubjectById");
routeExam.post("/register/:id",examResultRegister);
routeExam.get("/getAll/:id",examResultGetAllById);
routeExam.get("/deleteAll/:id",examResultDeleteAllById);
routeExam.get("/delete/subject/:id",examResultDeleteSubjectById);


module.exports={routeExam}