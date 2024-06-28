import Razorpay from 'razorpay'
import { NextRequest, NextResponse } from "next/server";
import { instance } from '@/lib/server';

export async function POST(req:NextRequest) {
    try {
        const cart = await req.json();
        console.log(cart);
  
        const totalAmount = cart.products.reduce((total:any, cartProduct:any) => {
            const productPrice = cartProduct.productId.customerPrize;
            const quantity = cartProduct.productQnt;
            return total + (productPrice * quantity);
        }, 0);
        
        
        const options = {
            amount: totalAmount * 100,
            currency: "INR"
          };
          
        const order = await instance.orders.create(options)

        console.log(order);
        return NextResponse.json({order});
    } catch (error) {
        console.error(error);  
        return NextResponse.json({ message: "Method Not Allowed" }, { status: 500 });
    }
}
