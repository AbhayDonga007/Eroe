import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import img from '../images/z1.jpg'

type Props = {}

const Banner = (props: Props) => {
  return (
    <Swiper
      className='w-full h-lvh'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image
            className="w-full h-auto"
            src={img}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full"
            src={img}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full"
            src={img}
            alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className="w-full"
            src={img}
            alt="Picture of the author"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Banner