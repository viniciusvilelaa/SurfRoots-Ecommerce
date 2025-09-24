import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import new_collections from '../Assets/new_collections'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../Assets/css/flashSales.css'
import SingleItem from './SingleItem'

function NewCollections() {
  return (
    <div className='flash--container'>
        
        <h2 className='flash--subtitle'>NOVIDADES PARA VOCÊ</h2>
        <Swiper modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={4} loop={true} className='singleItem--carousel' >
                {new_collections.map((item,i)=>{
                    return <SwiperSlide>
                      <SingleItem key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} ></SingleItem>
                    </SwiperSlide>
                })}
                
            </Swiper>
       
    </div>
  )
}

export default NewCollections