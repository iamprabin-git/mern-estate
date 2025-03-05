import React from 'react';
import logo from '../assets/Image/logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';


export default function Advertisement() {
    return (
        <div>
        <button className='font-bold text-size-2xl w-52 h-10 border-2 border-green-700 items-center m-4'>Our Advertising Partners</button>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={logo} alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={logo} alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={logo} alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={logo} alt="logo" /></SwiperSlide>
        
        ...
      </Swiper>
      </div>
    );
  };
