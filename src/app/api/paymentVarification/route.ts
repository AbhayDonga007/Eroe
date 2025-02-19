import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
    try {
        const body = await req.text();  // Get the body as text
        const params = new URLSearchParams(body);  // Parse the text as URLSearchParams

        const razorpay_order_id = params.get('razorpay_order_id');
        const razorpay_payment_id = params.get('razorpay_payment_id');
        const razorpay_signature = params.get('razorpay_signature');

        const temp = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto.createHmac('sha256',process.env.ROZORPAY_SECRET_KEY!).update(temp.toString()).digest('hex');

        if (expectedSignature === razorpay_signature) {
            return NextResponse.redirect("https://eroe-designer.vercel.app/")
        } else {
            return NextResponse.json({ message: "Invalid Signature", signatureIsValid: false }, { status: 400 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Method Not Allowed" }, { status: 500 });
    }
}

