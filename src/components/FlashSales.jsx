import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../assets/css/flashSales.css'
import SingleItem from './SingleItem'

function FlashSales() {
  return (
    <div className='flash--container'>
        <h1 className='flash--title'>Ofertas Relampago</h1>
        <h2 className='flash--subtitle'>Flash Sales</h2>
        <Swiper modules={[Navigation]}
                navigation
                slidesPerView={4} loop={true} className='singleItem--carousel' >
                <SwiperSlide>
                  <SingleItem></SingleItem>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleItem></SingleItem>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleItem></SingleItem>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleItem></SingleItem>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleItem></SingleItem>
                </SwiperSlide>
                
            </Swiper>
       
    </div>
  )
}

export default FlashSales