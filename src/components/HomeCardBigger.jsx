import React from 'react'
import "../Assets/css/HomeCardBigger.css"


function HomeCardBigger() {
  return (

    <div className="card-bigger">
      <img src="./public/image.png" alt="promoção" />
      <div className="card-bigger--infos">
        <p>Icons of surf</p>
        <p className='card-bigger--infos-subtitle'>celebre a historia com a rip curl</p>
        <a href="#" className='card-bigger--infos-buy'>COMPRE AQUI</a>

      </div>
    </div>



  )
}

export default HomeCardBigger