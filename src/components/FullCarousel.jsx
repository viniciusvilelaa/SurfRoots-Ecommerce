import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import HomeCardBigger from './HomeCardBigger';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './custom-swiper.css'

function FullCarousel() {
  return (
    <div className='full-carousel'>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ el: '.custom-pagination', clickable: true }}
        spaceBetween={50}
        
        loop={true}

        slidesPerView={1}
      >
        <SwiperSlide><HomeCardBigger /></SwiperSlide>
        <SwiperSlide><HomeCardBigger /></SwiperSlide>
        <SwiperSlide><HomeCardBigger /></SwiperSlide>
        <SwiperSlide><HomeCardBigger /></SwiperSlide>
        <SwiperSlide><HomeCardBigger /></SwiperSlide>
      </Swiper>

      <div className="custom-pagination mt-4" />
    </div>
  );
}


export default FullCarousel