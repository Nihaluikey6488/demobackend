import userModel from "../config/models/auth.model.js";
import jwt from 'jsonwebtoken'
export const registerController=async(req,res)=>{
let {name,email,password}=req.body
if(!name || !email || !password){
    return res.status(400).json({
        message:"All fields are required"
    })
    
}
 
    let emailRegex = /^\S+@\S+\.\S+$/;
if(!emailRegex.test(email)){
   
    
}


let isExisted=await userModel.findOne({email})
if(isExisted){
    return res.status(400).json({
        message:"email already registered"
    })
}
let newUser=await userModel.create({
    name,email,password
})

let token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{
    expiresIn:'1h'
})
res.cookie("token",token)
return res.status(200).json({
        message:"User registered successfully",
        newUser
    })
}