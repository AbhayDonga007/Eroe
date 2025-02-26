// import { connectMongoDB } from "@/lib/mongodb";
// import Order from "@/models/orders";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     // const changeStream = Product.watch();
//     // changeStream.on("change",async (event) => {
//       const { searchParams } = new URL(req.url);
//       const id = searchParams.get("userId");
//       console.log("userID",id);
      
//       await connectMongoDB();

//       const data = await Order.find({ customerId: id });
//       // const data = await Order.find({ });
//       console.log("Orders",data);

//       return NextResponse.json(data);
//     // });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Something is Wrong!" },
//       { status: 500 }
//     );
//   }
// }
export const dynamic = "force-dynamic";

import { connectMongoDB } from "@/lib/mongodb";
import Order from "@/models/orders";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectMongoDB(); // Connect to MongoDB
  try {
    const { searchParams } = new URL(req.url);
    const customerEmail = searchParams.get("customerEmail");
    const statusFilter = searchParams.get("status"); // Optional status filter
    const searchQuery = searchParams.get("search"); // Optional search query

    if (!customerEmail) {
      return NextResponse.json({ error: "Customer email is required." }, { status: 400 });
    }

    // Build query object
    let query: any = { customerEmail: customerEmail.toLowerCase() };

    if (statusFilter && statusFilter !== "all") {
      query.status = statusFilter;
    }

    if (searchQuery) {
      query.$or = [
        { orderId: { $regex: searchQuery, $options: "i" } }, // Case-insensitive orderId search
        { "products.product": { $regex: searchQuery, $options: "i" } }, // Search inside products
      ];
    }

    const orders = await Order.find(query).populate("products.product");

    if (orders.length === 0) {
      return NextResponse.json({ error: "No orders found." }, { status: 404 });
    }

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: "Failed to fetch orders." }, { status: 500 });
  }
}
