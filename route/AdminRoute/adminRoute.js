const express=require("express");
const routeAdmin=express.Router();
const {adminRegisterController}=require("../../controller/AdminController/adminRegister");
const {adminUpdateController}=require("../../controller/AdminController/adminUpdate");
const {adminDeleteController}=require("../../controller/AdminController/adminDelete");
const {adminForgotPasswordController}=require("../../controller/AdminController/forgotPassword");
const {adminGetAllData}=require("../../controller/AdminController/adminGetAllData");
const {adminDataById}=require("../../controller/AdminController/adminDataById");
const {adminPasswordResetController}=require("../../controller/AdminController/adminPasswordReset");

routeAdmin.get("/get/all",adminGetAllData);
routeAdmin.get("/get/:id",adminDataById);
routeAdmin.post("/register",adminRegisterController);
routeAdmin.put("/update/:id",adminUpdateController);
routeAdmin.delete("/delete/:id",adminDeleteController);
routeAdmin.get("/forgot/:id",adminForgotPasswordController);
routeAdmin.get("/reset/:id",adminPasswordResetController);


module.exports={routeAdmin}