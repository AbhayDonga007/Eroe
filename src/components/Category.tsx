/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/PScKSjnOyTw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import Link from "next/link";
import img from "../images/z2.jpg";
import img1 from "../images/catagory-1.jpg";
import img2 from "../images/catagory-2.jpg";
import img3 from "../images/catagory-3.jpg";
import img4 from "../images/catagory-4.jpg";
import img5 from "../images/catagory-5.jpg";
import Image from "next/image";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Pacifico } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
})
const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
})

export function Category() {
  return (
    <section className="w-full py-6">
      <div className="container grid gap-8 md:gap-12 px-4 md:px-6">
        <div className="text-center md:items-center gap-4 md:gap-8">
          <div className="grid gap-3">
            <div className={pacifico.className}>
            <h1 className="text-4xl font-bold">
              Shop By Collection
            </h1>
            </div>
            <div className={libre.className}>
            <p className="text-gray-500">
              Filfil the Fashion Forver
            </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 xl:pl-[150px] xl:pr-[150px] md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
            <div className="grid gap-4">
              <div className="grid gap-2.5  relative group">
                <Card
                  isFooterBlurred
                  className="rounded-[22px] bg-gray-200"
                  shadow="sm"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardHeader className="top-[35%] absolute z-10 flex-col  place-items-center">
                    <Button className="bg-white text-black font-bold uppercase  px-3 py-3 rounded-lg text-sm">
                      <Link
                        className="absolute inset-0 z-10"
                        href={`/category/Kurti`}
                      />
                      Kurti
                    </Button>
                  </CardHeader>
                  <CardBody className="p-0 hover:scale-125 ease-in duration-300">
                    <Swiper
                      className="w-full bg-black/30 bg-blur"
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      // spaceBetween={50}
                      slidesPerView={1}
                      // navigation
                      pagination={{ clickable: true, dynamicBullets: true }}
                      // scrollbar={{ draggable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide className="">
                        <Image
                          alt="Leather Jacket"
                          className="object-cover w-full aspect-[1/1] opacity-90 transition-opacity gap-y-3"
                          height={350}
                          src={img1}
                          width={350}
                        />
                        <Link className="absolute inset-0 z-10" href={`/category/Kurti`} />
                      </SwiperSlide>
                    </Swiper>
                  </CardBody>
                </Card>
              </div>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
            <div className="grid gap-4">
              <div className="grid gap-2.5  relative group">
                <Card
                  isFooterBlurred
                  className="rounded-[22px] object-fit bg-gray-200"
                  shadow="sm"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardHeader className="top-[35%] absolute z-10 flex-col  place-items-center">
                    <Button className="bg-white text-black font-bold uppercase  px-3 py-3 rounded-lg text-sm">
                      <Link
                            className="absolute inset-0 z-10"
                            href={`/category/Pant Pair`}
                          ></Link>
                      {/* <p className="uppercase">Kurti</p> */}
                      Pant Pair
                    </Button>
                  </CardHeader>
                  <CardBody className="p-0 hover:scale-125 ease-in duration-300">
                    <Swiper
                      className="w-full bg-black/30 bg-blur"
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      // spaceBetween={50}
                      slidesPerView={1}
                      // navigation
                      pagination={{ clickable: true, dynamicBullets: true }}
                      // scrollbar={{ draggable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide className="">
                        <Image
                          alt="Leather Jacket"
                          className="object-cover w-full aspect-[1/1] opacity-90 transition-opacity gap-y-3"
                          height={350}
                          src={img2}
                          width={350}
                        />
                        <Link className="absolute inset-0 z-10" href={`/category/Pant Pair`} />
                      </SwiperSlide>
                    </Swiper>
                  </CardBody>
                </Card>
              </div>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
            <div className="grid gap-4">
              <div className="grid gap-2.5  relative group">
                <Card
                  isFooterBlurred
                  className="rounded-[22px] object-fit bg-gray-200"
                  shadow="sm"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardHeader className="top-[35%] absolute z-10 flex-col  place-items-center">
                    <Button className="bg-white text-black font-bold uppercase  px-3 py-3 rounded-lg text-sm">
                      {/* <Link
                            className="absolute inset-0 z-10"
                            href={`/product/${item._id}`}
                          ></Link> */}
                      {/* <p className="uppercase">Kurti</p> */}
                      <Link className="absolute inset-0 z-10" href={`/category/Gown`} />
                      Gown
                    </Button>
                  </CardHeader>
                  <CardBody className="p-0 hover:scale-125 ease-in duration-300">
                    <Swiper
                      className="w-full bg-black/30 bg-blur"
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      // spaceBetween={50}
                      slidesPerView={1}
                      // navigation
                      pagination={{ clickable: true, dynamicBullets: true }}
                      // scrollbar={{ draggable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide className="">
                        <Image
                          alt="Leather Jacket"
                          className="object-cover w-full aspect-[1/1] opacity-90 transition-opacity gap-y-3"
                          height={350}
                          src={img3}
                          width={350}
                        />
                        <Link className="absolute inset-0 z-10" href={`/category/Gown`} />
                      </SwiperSlide>
                    </Swiper>
                  </CardBody>
                </Card>
              </div>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
            <div className="grid gap-4">
              <div className="grid gap-2.5  relative group">
                <Card
                  isFooterBlurred
                  className="rounded-[22px] object-fit bg-gray-200"
                  shadow="sm"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardHeader className="top-[35%] absolute z-10 flex-col  place-items-center">
                    <Button className="bg-white text-black font-bold uppercase  px-3 py-3 rounded-lg text-sm">
                      {/* <Link
                            className="absolute inset-0 z-10"
                            href={`/product/${item._id}`}
                          ></Link> */}
                      {/* <p className="uppercase">Kurti</p> */}
                      <Link className="absolute inset-0 z-10" href={`/category/Plaza Pair`} />
                      Plaza Pair
                    </Button>
                  </CardHeader>
                  <CardBody className="p-0 hover:scale-125 ease-in duration-300">
                    <Swiper
                      className="w-full bg-black/30 bg-blur"
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      // spaceBetween={50}
                      slidesPerView={1}
                      // navigation
                      pagination={{ clickable: true, dynamicBullets: true }}
                      // scrollbar={{ draggable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide className="">
                        <Image
                          alt="Leather Jacket"
                          className="object-cover w-full aspect-[1/1] opacity-90 transition-opacity gap-y-3"
                          height={350}
                          src={img4}
                          width={350}
                        />
                        <Link className="absolute inset-0 z-10" href={`/category/Plaza Pair`} />
                      </SwiperSlide>
                    </Swiper>
                  </CardBody>
                </Card>
              </div>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
            <div className="grid gap-4">
              <div className="grid gap-2.5  relative group">
                <Card
                  isFooterBlurred
                  className="rounded-[22px] object-fit bg-gray-200"
                  shadow="sm"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardHeader className="top-[35%] absolute z-10 flex-col  place-items-center">
                    <Button className="bg-white text-black font-bold uppercase px-3 py-3 rounded-lg text-sm">
                      {/* <Link
                            className="absolute inset-0 z-10"
                            href={`/product/${item._id}`}
                          ></Link> */}
                      {/* <p className="uppercase">Kurti</p> */}
                      <Link className="absolute inset-0 z-10" href={`/category/Nayra Pair`} />
                      Nayra Pair
                    </Button>
                  </CardHeader>
                  <CardBody className="p-0 hover:scale-125 ease-in duration-300">
                    <Swiper
                      className="w-full bg-black/30 bg-blur"
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      // spaceBetween={50}
                      slidesPerView={1}
                      // navigation
                      pagination={{ clickable: true, dynamicBullets: true }}
                      // scrollbar={{ draggable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide className="">
                        <Image
                          alt="Leather Jacket"
                          className="object-cover w-full aspect-[1/1] opacity-90 transition-opacity gap-y-3"
                          height={350}
                          src={img5}
                          width={350}
                        />
                        <Link className="absolute inset-0 z-10" href={`/category/Nayra Pair`} />
                      </SwiperSlide>
                    </Swiper>
                  </CardBody>
                </Card>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
}
