
const express=require("express");
const { registerController, loginController } = require("../controller/auth.controller");
const userRouter=express.Router();

userRouter.post("/api/register",registerController);
userRouter.post("/api/login",loginController);




module.exports={
    userRouter
}