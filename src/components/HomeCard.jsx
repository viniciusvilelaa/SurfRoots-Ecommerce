import React from 'react'
import "../assets/css/HomeCard.css"


function HomeCard() {
  return (
    <div className='cards--container'>
      <div className="card">
        <img src="./public/cardImg.webp" alt="promoção" />
        <div className="card--infos">
          <a href="#">EQUIPAMENTOS</a>
          <a href="#" className='card--infos-buy'>COMPRE AQUI!</a>
        </div>
      </div>
      <div className="card">
        <img src="./public/cardImg.webp" alt="promoção" />
        <div className="card--infos">
          <a href="#">EQUIPAMENTOS</a>
          <a href="#" className='card--infos-buy'>COMPRE AQUI!</a>
        </div>
      </div>
      <div className="card">
        <img src="./public/cardImg.webp" alt="promoção" />
        <div className="card--infos">
          <a href="#">EQUIPAMENTOS</a>
          <a href="#" className='card--infos-buy'>COMPRE AQUI!</a>
        </div>
      </div>
    </div>

  )
}

export default HomeCard