import React from 'react'
import '../assets/css/Home.css'
import Carousel from '../components/Carousel'
import FlashSales from '../components/FlashSales'
import HomeCard from '../components/HomeCard'
import HomeCardBigger from '../components/HomeCardBigger'
function Home() {
    return (
        <div>
            <div className="home--container">
                <Carousel></Carousel>
                <FlashSales></FlashSales>
                <HomeCard></HomeCard>
                <HomeCardBigger></HomeCardBigger>
            </div>
            
        </div>
    )
}

export default Home