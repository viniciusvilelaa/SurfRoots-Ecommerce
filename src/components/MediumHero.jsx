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
      <p className='bottom-p'>A Surf Roots nasceu para resgatar a essência do surf raiz, 
        trazendo em cada coleção o espírito livre, autêntico e radical das 
        praias que moldaram essa cultura. Nossa Loja Virtual oferece roupas e 
        acessórios que vestem o lifestyle do surf dentro e fora da água, com estilo, atitude e 
        conexão verdadeira com o mar. Seja para cair nas ondas, curtir a praia ou levar essa energia 
        para o dia a dia, a Surf Roots é a marca que mantém vivo o surf em sua forma mais pura.</p>
    </div>
  )
}

export default MediumHero