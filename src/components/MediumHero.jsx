import React from 'react'

function MediumHero() {
  return (
    <div className='medium-hero'>
      <div className='image-container'>
        <img className='image-medium' src="/medina1.jpg.webp" alt="" />
      </div>
      <div className='aircards-container'>
        <div className='aircard'>
          <img src="/yagodora.jpg" alt="" />
          <div className="aircard-infos">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, maiores.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vitae adipisci est eos rem, dignissimos at sunt esse sapiente, voluptatem numquam sed facere optio consequuntur officia autem aliquid ad debitis!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediumHero