import mongoose from "mongoose";
import bcrypt from "bcrypt";


let userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
    
})


userSchema.pre('save',async function(){
    this.password=await bcrypt.hash(this.password,10)
})

const userModel=mongoose.model("User",userSchema)

export default  userModel