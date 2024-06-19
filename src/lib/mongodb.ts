import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI!,{dbName:'Aavkar'});
        console.log("MongoDB Connected");
        
    }
    catch(error){
        console.log("MongoDB Connectinf Error",error);
    }
}