"use client"
import CategoryProducts from "@/components/CategoryProducts";
import Nav from "@/components/Nav";
import { Product } from "@/components/Product";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  params: {
    categoryName: string;
  };
};

interface Product {
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

const Page =async ({ params }: Props) => {
  const name = params.categoryName;
  // await new Promise((resolve) => setTimeout(resolve,3000));

  useEffect(() => {
    const getData = async () => {
      await axios.get(`/api/getDataByType?type=${name}`);
    };
    // console.log(name);
    
    getData();
  }, [name]);
  return (
    <>
      <Nav />
      <CategoryProducts type={name}/>
    </>
  );
};

export default Page;
