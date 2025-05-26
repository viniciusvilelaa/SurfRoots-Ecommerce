import React from 'react'
import '../assets/css/Home.css'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import FlashSales from '../components/FlashSales'
function Home() {
    return (
        <div>
            <div className="home--container">
                <Carousel></Carousel>
                <FlashSales></FlashSales>
            </div>
            
        </div>
    )
}

export default Home