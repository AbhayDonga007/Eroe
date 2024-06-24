"use client";
import Banner from "@/components/Banner";
import { CardProduct } from "@/components/Card";
import { Category } from "@/components/Category";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Newsletter } from "@/components/Newsletter";
import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import CategoryProducts from "@/components/CategoryProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
import img from "@/images/plaza1.jpeg";
import { ShoppingCart } from "lucide-react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import 'primeicons/primeicons.css';
import CustomerExp from "@/components/CustomerExp";
import QualityProduct from "@/components/QualityProduct";
        

type Props = {};

const DashBoard = (props: Props) => {
  return (
    <>
      {/* <div>DashBoard</div>
        <div>Name : {session?.user?.name}</div>
        <div>Email : {session?.user?.email}</div>
        <Button onClick={() => {
          toast.success("Logout Successful")
          signOut()
        }}>Logout</Button> */}
      <Button isIconOnly onClick={()=>console.log("Cliked")} className="fixed w-[50px] h-[50px] bottom-[30px] left-[30px] bg-[#00e676] rounded-full z-30">
        <Link
          href="https://chat.whatsapp.com/JcalaznsoG2KvWcPJXdRmE"
          target="_"
        >
          <i className="pi pi-whatsapp text-white" style={{ fontSize: '1.8rem' }}></i>
        </Link>
      </Button>
      <Nav />
      <Banner />
      <Category />
      <CardProduct />

      <Swiper
        className="w-full bg-black/30 bg-blur"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Image
            className="w-full inset-0 object-cover"
            src={img}
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>

      <CategoryProducts type="Kurti" />
      <Swiper
        className="w-full bg-black/30 bg-blur"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Image
            className="w-full object-cover item-center"
            src={img}
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>

      <CategoryProducts type="Pant Pair" />

      <Swiper
        className="w-full bg-black/30 bg-blur"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Image
            className="w-full object-cover item-center"
            src={img}
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>

      <CategoryProducts type="Gown" />

      <Swiper
        className="w-full bg-black/30 bg-blur"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Image
            className="w-full object-cover item-center"
            src={img}
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>

      <CategoryProducts type="Plaza Pair" />

      <Swiper
        className="w-full bg-black/30 bg-blur"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Image
            className="w-full object-cover item-center"
            src={img}
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>

      <CategoryProducts type="Nayra Pair" />
      <CustomerExp />
      <QualityProduct />  
      <Newsletter />
      <Footer />
    </>
  );
};

export default DashBoard;