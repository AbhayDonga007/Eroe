"use client"
import { CardProduct } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Newsletter } from "@/components/Newsletter";
import QualityProduct from "@/components/QualityProduct";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Nav />
      <CardProduct />
      <Newsletter />
      <QualityProduct />
      <Footer />
    </div>
  );
};

export default page;
