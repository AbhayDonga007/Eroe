import Product from "@/models/products"
import { connectMongoDB } from "./mongodb";

export const getDataById =async (id: string) => {
    try {
        console.log(id);
        
        await connectMongoDB();
        const data = await Product.find({_id:id})
        console.log(data);
        
        return data;
    } catch (error) {
        console.error(error);  
        return "Something is Wrong!";
    }
}