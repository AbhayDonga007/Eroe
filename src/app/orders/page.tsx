"use client";
import { FilterBar } from "@/components/FilterBar";
import Nav from "@/components/Nav";
import { OrderCard } from "@/components/OrderCard";
import { useSession } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

// const mockOrders = [
//   {
//     status: "Delivered",
//     customerName: "Abhay Donga",
//     shippingAddress: "123 Main St, Anytown, AN 12345",
//     customerPhone: "+1 (555) 123-4567",
//     orderPrice: 129.99,
//     items: 3,
//     products: [
//       { sku: "PROD-A", name: "Product A", status: "Delivered" },
//       { sku: "PROD-B", name: "Product B", status: "Delivered" },
//       { sku: "PROD-C", name: "Product C", status: "Returned", refundId: "REF001", refundAmount: 29.99 },
//     ],
//   },
//   {
//     status: "Processing",
//     customerName: "Abhay Donga",
//     shippingAddress: "456 Elm St, Somewhere, SW 67890",
//     customerPhone: "+1 (555) 987-6543",
//     orderPrice: 79.99,
//     items: 2,
//     products: [
//       { sku: "PROD-D", name: "Product D", status: "Processing" },
//       { sku: "PROD-E", name: "Product E", status: "Processing" },
//     ],
//   },
// ]

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const session = useSession();
  const userId = session.session?.user.id;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/api/orders?userId=${userId}`);
      console.log("Orders", res);

      setOrders(res.data);
    };

    getData();
  }, [userId]);

  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Customer Orders</h1>
        <FilterBar />
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard order={order} />
          ))}
        </div>
      </div>
    </>
  );
}
