import { connectMongoDB } from '@/lib/mongodb';
import Cart from '@/models/cart';
import Product from '@/models/products';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
    try {
        const data = await req.json(); 
        console.log(data);
        
        await connectMongoDB();

        const product = await Product.findById(data.productId);
        // await Cart.create({ 
        //     userId: data.userId, 
        //     products: [{ productId: product._id, productQnt: data.count }] 
        // });

        let cart = await Cart.findOne({ userId: data.userId });

        if (!cart) {
            // If cart does not exist, create a new cart
            cart = new Cart({
                userId: data.userId,
                products: [{ productId: product._id, productQnt: data.productQnt , productSize:data.productSize, productColor: data.productColor}]
            });
        } else {
            // If cart exists, check if the product already exists in the cart
            const existingProduct = cart.products.find((p:any) => p.productId.equals(product._id));
            if (existingProduct) {
                // If product exists, update the quantity
                existingProduct.productQnt += data.count;
            } else {
                // If product does not exist, add it to the products array
                cart.products.push({ productId: product._id, productQnt: data.productQnt, productSize:data.productSize, productColor: data.productColor });
            }
        }

        // Save the cart to the database
        await cart.save();
        
        
        return NextResponse.json({ message: "Product Saved." }, { status: 201 });
    } catch (error) {
        console.error(error);  
        return NextResponse.json({ message: "Something is Wrong!" }, { status: 500 });
    }
}
