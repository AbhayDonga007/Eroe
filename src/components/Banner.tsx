import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

import b1 from "@/images/banner5.png"
import b2 from "@/images/Piyush Donga-images-1.jpg"
import b3 from "@/images/banner1.png"
import b4 from "@/images/banner2.png"
import b5 from "@/images/banner3.png"
import b6 from "@/images/banner4.png"

type Props = {}

const Banner = (props: Props) => {
  return (
    <Swiper
      className='w-auto bg-black/30 bg-blur'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true,dynamicBullets: true}}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {/* <SwiperSlide>
        <Image
            className="object-cover"
            src={b1}
            alt="Picture of the author"
        />
      </SwiperSlide> */}
      <SwiperSlide>
        <Image
            className="object-cover"
            src={b1}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="object-cover"
            src={b3}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="object-cover"
            src={b2}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="object-cover"
            src={b4}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="object-cover"
            src={b5}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="object-cover"
            src={b6}
            alt="Picture of the author"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Banner