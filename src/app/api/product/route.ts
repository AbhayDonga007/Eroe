import { connectMongoDB } from '@/lib/mongodb';
import Product from '@/models/products';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
    try {
        // const base64 = await req.json(); 
        // console.log(base64);
        // await connectMongoDB();
        // await Product.create({images:base64});

        const product = await req.json(); 
        console.log(product);
        await connectMongoDB();
        await Product.create(
            {name:product.name,des:product.des,type:product.type,size:product.size,oriPrice:product.oriPrice,disPrice:product.disPrice,images:product.image}
        );
        
        return NextResponse.json({ message: "Product Saved." }, { status: 201 });
    } catch (error) {
        console.error(error);  
        return NextResponse.json({ message: "Something is Wrong!" }, { status: 500 });
    }
}
