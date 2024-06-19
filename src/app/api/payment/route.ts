import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req:NextRequest) {
    try {
        const cart = await req.json();
        // const products = Array.isArray(body) ? body : [];
        console.log(cart);
        // const customer = await stripe.customers.create({
        //   name: 'Jenny Rosen',
        //   address: {
        //     line1: '510 Townsend St',
        //     postal_code: '394185',
        //     city: 'San Francisco',
        //     state: 'GJ',
        //     country: 'IN',
        //   },
        // });

        
        // console.log(products);
        const lineItems = cart.products.map((product:any) => ({
              price_data: {
                currency: "usd",
                product_data: {
                  name: product.productId.name,
                  images: [],
                },
                unit_amount: Math.round(product.productId.disPrice * 100),
              },
              quantity: product.productQnt,
            
          }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "https://aavkar-fashion.vercel.app/dashboard",
            cancel_url: "https://aavkar-fashion.vercel.app/dashboard",
          });
        // const paymentIntent = await stripe.paymentIntents.create({
        //   description: 'Software development services',
        //   shipping: {
        //     name: 'Jenny Rosen',
        //     address: {
        //       line1: '510 Townsend St',
        //       postal_code: '98140',
        //       city: 'San Francisco',
        //       state: 'CA',
        //       country: 'US',
        //     },
        //   },
        //   amount: 1099,
        //   currency: 'inr',
        //   payment_method_types: ['card'],
        // });
        
        return NextResponse.json({ id: session.id }, { status: 201 });
    } catch (error) {
        console.error(error);  
        return NextResponse.json({ message: "Method Not Allowed" }, { status: 500 });
    }
}
