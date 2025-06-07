import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Carousel() {
    return (
        <div className='carousel-container'>
            <Swiper modules={[Autoplay]}
                
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                speed={1500}
                slidesPerView={1} loop={true} className='carousel' >
                <SwiperSlide><img src="../public/image-slider1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="../public/image-slider2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="../public/image-slider2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="../public/image-slider2.jpg" /></SwiperSlide>

            </Swiper>
        </div >

    );
}

export default Carousel