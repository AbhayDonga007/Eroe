"use client";
import { Nav } from "@/components/Nav";
import { useSession } from "@clerk/nextjs";
import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface Product {
  _id: string;
  name: string;
  des: string;
  type: Array<string>;
  size: Array<string>;
  customerPrize: number;
  productPrize: number;
  retailPrize: number;
  artical_no: string;
  color: Array<string>;
  images: Array<string>;
}

export interface CartProduct {
  productId: Product;
  productQnt: number;
  productSize: string;
  productColor: string;
}
export interface Cart {
  userId: string;
  products: CartProduct[];
}

type Props = {};

const Page = (props: Props) => {
  const [list, setList] = useState<Cart>();

  const [customerdetail, setCustomerDetail] = useState({
    name: "",
    email: "",
    phone: 0,
    address: "",
  });
  const session = useSession();
  const userId = session.session?.user.id;

  useEffect(() => {
    const getCartData = async () => {
      const res = await axios.get(`/api/getCartData?userId=${userId}`);
      console.log(res.data);

      setList(res.data);
    };

    getCartData();
  }, [userId]);

  const MakePayment = async () => {
    console.log(list?.products);

    if(customerdetail.name == "" || customerdetail.email == "" || customerdetail.phone == 0 || customerdetail.email == ""){
      toast.error("Please fill all the details")
    }

    const body = {
      products: list?.products,
    };
    const res = await fetch(`/api/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    const options = {
      key: process.env.ROZORPAY_API_KEY,
      amount: Number(data.order.amount * 100),
      currency: "INR",
      name: "Eroe Designer",
      description: "Test Transaction",
      order_id: data.order.id,
      callback_url: "/api/paymentVarification",
      prefill: {
        name: customerdetail.name,
        email: customerdetail.email,
        contact: customerdetail.phone,
      },
      notes: {
        address: customerdetail.address,
      },
      theme: {
        hide_topbar: true,
        color: "#121212",
      },
    };

    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Nav />
      <div
        key="1"
        className="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8 bg-gray-300"
      >
        <div className="w-full max-w-[900px] space-y-6 bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-2 justify-center flex items-center text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Customer Details
            </h1>
          </div>
          <div className="space-y-4 pl-[20%] pr-[20%]">
            <form onSubmit={MakePayment} className="space-y-6">
              <div className="space-y-2">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <div className="w-full flex flex-col gap-4">
                      <div
                        key="md"
                        className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                      >
                        <Input
                          onChange={(e) =>
                            setCustomerDetail({
                              ...customerdetail,
                              name: e.target.value,
                            })
                          }
                          size="md"
                          type="text"
                          label="Customer Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full flex flex-col gap-4">
                      <div
                        key="md"
                        className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                      >
                        <Input
                          onChange={(e) =>
                            setCustomerDetail({
                              ...customerdetail,
                              email: e.target.value,
                            })
                          }
                          size="md"
                          type="email"
                          label="Customer Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full flex flex-col gap-4">
                      <div
                        key="md"
                        className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                      >
                        <Input
                          onChange={(e) =>
                            setCustomerDetail({
                              ...customerdetail,
                              phone: Number(e.target.value),
                            })
                          }
                          size="md"
                          type="number"
                          min={10}
                          max={10}
                          label="Customer Contact No"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full flex flex-col gap-4">
                      <div
                        key="md"
                        className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                      >
                        <Textarea
                          onChange={(e) =>
                            setCustomerDetail({
                              ...customerdetail,
                              address: e.target.value,
                            })
                          }
                          label="Enter Full Shipping Address"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  // color="danger"
                  onClick={MakePayment}
                  className="w-full font-bold text-white bg-red-600 hover:text-red-500 hover:bg-red-200"
                >
                  Make Payment
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
