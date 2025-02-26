export const dynamic = "force-dynamic"; // Ensures API routes are always dynamic
import { connectMongoDB } from '@/lib/mongodb';
import Cart from '@/models/cart';
import Product from '@/models/products';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req:NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');
        if (!userId) {
            return NextResponse.json({ message: "UserId not exist" }, { status: 400 });
        }
        await connectMongoDB()
        console.log(userId);
        

        const cart = await Cart.findOne({ userId }).populate('products.productId');

        if (!cart) {
            return NextResponse.json({ message: "Cart not found" }, { status: 201 });
        }
        // const productIds = cart.reduce((acc, item) => {
        //     item.products.forEach(product => {
        //         acc.push(product.productId);
        //     });
        //     return acc;
        // }, []);
        // const products = await Product.find({ _id: { $in: productIds } });
        // const products = cart.products.map(item => ({
        //     product: item.productId,
        //     productQnt: item.productQnt
        // }));
        
        return NextResponse.json(cart);
    } catch (error) {
        console.error(error);  
        return NextResponse.json({ message: "Something is Wrong!" }, { status: 500 });
    }
}
