import React from 'react'
import '../Assets/css/Home.css'
import Carousel from '../components/Carousel'
import FlashSales from '../components/FlashSales'
import HomeCard from '../components/HomeCard'

import FullCarousel from '../components/FullCarousel'
import Newsletter from '../components/Newsletter'
import MediumHero from '../components/MediumHero'
import NewCollections from '../components/NewCollections'
import HomeCardBigger from '../components/HomeCardBigger'
function Home() {
    return (
        <div>
            <div className="home--container">
                <Carousel></Carousel>
                <FlashSales></FlashSales>
                <HomeCard></HomeCard>
                <FullCarousel></FullCarousel>
                <NewCollections></NewCollections>
                <Newsletter></Newsletter>
                <MediumHero></MediumHero>
                
            </div>
            
        </div>
    )
}

export default Home