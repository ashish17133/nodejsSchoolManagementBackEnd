const express = require('express');
const routeStudent=express.Router();
const {studentGetAll}=require("../../controller/StudentController/studentGetAll");
const {studentGetById}=require("../../controller/StudentController/studentGetById");
const {studentRegister}=require("../../controller/StudentController/studentRegister");
const {studentUpdate}=require("../../controller/StudentController/studentUpdate");
const {studentDelete}=require("../../controller/StudentController/studentDeleteById");
const {studentForgotPassword}=require("../../controller/StudentController/studentForgotPassword");
const {studentPasswordResetController}=require("../../controller/StudentController/studentPasswordReset");
routeStudent.get("/get/all",studentGetAll);
routeStudent.get("/get/:id",studentGetById);
routeStudent.post("/register",studentRegister);
routeStudent.put("/update/:id",studentUpdate);
routeStudent.delete("/delete/:id",studentDelete);
routeStudent.get("/forgot/password/:id",studentForgotPassword);
routeStudent.get("/reset/:id",studentPasswordResetController);



module.exports={routeStudent};