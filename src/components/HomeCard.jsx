import React from 'react'
import "../Assets/css/HomeCard.css"


function HomeCard() {
  return (
    <div className='cards--container'>
      <div className="card">
        <img src="/cardImg.webp" alt="promoção" />
        <div className="card--infos">
          <p >EQUIPAMENTOS</p>
          <a href="#" className='card--infos-buy'>COMPRE AQUI</a>
        </div>
      </div>
      <div className="card">
        <img src="/cardImg.webp" alt="promoção" />
        <div className="card--infos">
          <p href="#">EQUIPAMENTOS</p>
          <a href="#" className='card--infos-buy'>COMPRE AQUI</a>
        </div>
      </div>
      <div className="card">
        <img src="./public/cardImg.webp" alt="promoção" />
        <div className="card--infos">
          <p href="#">EQUIPAMENTOS</p>
          <a href="#" className='card--infos-buy'>COMPRE AQUI</a>
        </div>
      </div>
    </div>

  )
}

export default HomeCard