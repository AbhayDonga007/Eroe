"use client"
import { CardProduct } from "@/components/Card";
import { Footer } from "@/components/Footer";
import Nav from "@/components/Nav";
import { Newsletter } from "@/components/Newsletter";
import QualityProduct from "@/components/QualityProduct";
import React from "react";

type Props = {};

const page =async (props: Props) => {
  // await new Promise((resolve) => setTimeout(resolve,3000));
  return (
    <div>
      <Nav />
      <CardProduct />
      <QualityProduct />
      <Footer />
    </div>
  );
};

export default page;
