import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../assets/css/flashSales.css'

function FlashSales() {
  return (
    <div className='flash--container'>
        <h1 className='flash--title'>Ofertas Relampago</h1>
        <h2 className='flash--subtitle'>Flash Sales</h2>

       <div className='carousel'></div>
    </div>
  )
}

export default FlashSales