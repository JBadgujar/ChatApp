import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connect: ${conn.connection.host}`)
    }
    catch(e){
        console.log("MongoDB connection error", e);
    }
}


