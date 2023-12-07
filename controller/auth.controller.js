const { UserModel } = require("../Models/user.model");
const { hashPasswordFun, comparePassword } = require("../helpers/helper");
const jwt = require('jsonwebtoken');
require("dotenv").config();


const registerController = async (req, res) => {
  const { username, image, email, password } = req.body;
  try {
    const hash = await hashPasswordFun(password);
    const user = new UserModel({
      username,
      image,
      email,
      password: hash,
    });
    await user.save();
    res.status(200).send({
      status: true,
      msg: "User Registration Successful",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: false,
      msg: "Error in registration",
      err,
    });
  }
};


const loginController=async(req,res)=>{
    const{email,password}=req.body;
   try{
      const user=await UserModel.findOne({email});
      if(user){
        const match=await comparePassword(password,user.password);
        if(match){
            const token=jwt.sign({ _id:user._id,username:user.username}, process.env.SECRET_KEY);
            res.status(200).send({
                status:true,
                msg:"Login successfully",
                token
            })
        }else{
            res.send({msg:"Login Failed"});
        }
      }
   } catch (err) {
    console.log(err);
    res.status(400).send({
      status: false,
      msg: "Error in login",
      err,
    });
  }
}
module.exports = {
  registerController,
  loginController
};
