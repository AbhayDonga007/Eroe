import Razorpay from 'razorpay'
import { NextRequest, NextResponse } from "next/server";
import { instance } from '@/lib/server';
import { CartProduct } from '@/components/Nav';

export async function POST(req:NextRequest) {
    try {
        const cart = await req.json();
        console.log("Cart:", cart);

        // Ensure cart.products is an array before reducing
        if (!Array.isArray(cart.products)) {
            return NextResponse.json({ message: "Invalid cart data" }, { status: 400 });
        }

        // Calculate total amount correctly
        const totalAmount = cart.products.reduce((total: number, cartProduct: CartProduct) => {
            if (!cartProduct.productId || typeof cartProduct.productId.customerPrize !== "number") {
                console.warn("Invalid product data:", cartProduct);
                return total; // Skip invalid products
            }
            
            const productPrice = cartProduct.productId.customerPrize;
            const quantity = cartProduct.productQnt || 1; // Default to 1 if missing

            console.log(`Product Price: ${productPrice}, Quantity: ${quantity}`);

            return total + (productPrice * quantity);
        }, 0);

        console.log("Total Amount:", totalAmount);
        
        
        const options = {
            amount: totalAmount * 100,
            currency: "INR"
          };
          
        const order = await instance.orders.create(options)

        console.log(order);
        return NextResponse.json({order});
    } catch (error) {
        console.error(error);  
        return NextResponse.json({ message: "Payment Failed" }, { status: 500 });
    }
}
