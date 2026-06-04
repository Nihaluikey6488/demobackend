import mongoose from "mongoose";
let connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connnected successfully")
    } catch (error) {
        console.log("Error in connecting mongoDB connection")
    }
}

export default connectDb;