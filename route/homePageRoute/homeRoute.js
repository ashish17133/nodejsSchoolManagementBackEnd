const express=require("express");
const routeHome=express.Router();
const {homeController}=require("../../controller/homeController/homeController");
routeHome.get("/",homeController);


module.exports={routeHome}