import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import b1 from "@/images/Piyush Donga-images-0.jpg"
import b12 from "@/images/banner5.png"
import b2 from "@/images/Piyush Donga-images-1.jpg"
import b13 from "@/images/banner1.png"
import b3 from "@/images/Piyush Donga-images-2.jpg"
import b4 from "@/images/Piyush Donga-images-3.jpg"
import b5 from "@/images/Piyush Donga-images-4.jpg"
import b6 from "@/images/Piyush Donga-images-5.jpg"
import b7 from "@/images/Piyush Donga-images-6.jpg"
import b8 from "@/images/Piyush Donga-images-7.jpg"
import b9 from "@/images/Piyush Donga-images-8.jpg"
import b10 from "@/images/Piyush Donga-images-9.jpg"
import b11 from "@/images/Piyush Donga-images-10.jpg"

type Props = {}

const Banner = (props: Props) => {
  return (
    <Swiper
      className='w-full bg-black/30 bg-blur'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true,dynamicBullets: true}}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b12}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b1}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b13}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b2}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b3}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b4}
            alt="Picture of the author"
        />
      </SwiperSlide>
      {/* <SwiperSlide>
        <Image
            className="w-full sm:h-[500px] object-contain"
            src={b5}
            alt="Picture of the author"
        />
      </SwiperSlide> */}
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b6}
            alt="Picture of the author"
        />
      </SwiperSlide>
      {/* <SwiperSlide>
        <Image
            className="w-full sm:h-[500px] object-contain"
            src={b7}
            alt="Picture of the author"
        />
      </SwiperSlide> */}
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b8}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b9}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full object-contain"
            src={b10}
            alt="Picture of the author"
        />
      </SwiperSlide>
      {/* <SwiperSlide>
        <Image
            className="w-full sm:h-[500px] object-contain"
            src={b11}
            alt="Picture of the author"
        />
      </SwiperSlide> */}
    </Swiper>
  )
}

export default Banner