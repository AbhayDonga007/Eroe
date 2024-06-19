import { connectMongoDB } from '@/lib/mongodb';
import Product from '@/models/products';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req:NextRequest) {
    try {
        await connectMongoDB();
        const data = await Product.find({})
                
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);  
        return NextResponse.json({ message: "Something is Wrong!" }, { status: 500 });
    }
}
