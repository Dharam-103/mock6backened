const bcrypt=require("bcrypt");

const hashPasswordFun=async(password)=>{
  try{
       const saltRounds=10;
       const hashPassword= await bcrypt.hash(password,saltRounds);
       return hashPassword;
  }catch(err){
    console.log(err);
  }
}

const comparePassword=async(password,hashPassword)=>{
   return bcrypt.compare(password,hashPassword);
}
module.exports={
    hashPasswordFun,
    comparePassword
}