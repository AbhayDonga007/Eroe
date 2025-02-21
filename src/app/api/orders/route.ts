import { connectMongoDB } from "@/lib/mongodb";
import Order from "@/models/orders";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // const changeStream = Product.watch();
    // changeStream.on("change",async (event) => {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("userId");
      console.log("userID",id);
      
      await connectMongoDB();

      const data = await Order.find({ customerId: id });
      // const data = await Order.find({ });
      console.log("Orders",data);

      return NextResponse.json(data);
    // });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something is Wrong!" },
      { status: 500 }
    );
  }
}
