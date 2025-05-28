import React from 'react'
import '../assets/css/Home.css'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import FlashSales from '../components/FlashSales'
import SingleItem from '../components/SingleItem'
import HomeCard from '../components/HomeCard'
function Home() {
    return (
        <div>
            <div className="home--container">
                <Carousel></Carousel>
                <FlashSales></FlashSales>
                <HomeCard></HomeCard>
            </div>
            
        </div>
    )
}

export default Home