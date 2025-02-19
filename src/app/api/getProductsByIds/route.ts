import { connectMongoDB } from '@/lib/mongodb';
import Product from '@/models/products';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { productIds } = await req.json();
        await connectMongoDB();
        
        const products = await Product.find({ _id: { $in: productIds } });

        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching products" }, { status: 500 });
    }
}
