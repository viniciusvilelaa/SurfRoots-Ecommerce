import React from 'react'
import '../assets/css/SingleItem.css'

function SingleItem() {
  return (
    <div className="container-singleItem">
        <div className='singleItem--top'>
            <img src="../public/longjohn.webp" alt="Produto da loja" />
            <div className='over-product'>
                <p>ver detalhes</p>
                <p>adicionar no carrinho</p>
            </div>
        </div>
        <div className='singleItem--infos'>
            <p className="singleItem--infos-name">
                LONG JOHN E-BOMB 3/2MM ZIP FREE (WILD BERRY, PP)
            </p>
            <p className='singleItem--infos-price'>R$ 2799,99</p>
            <p className='singleItem--infos-price_down'>
                em <b>10x</b> de <b>R$ 280,00 sem juros</b> <br />
                ou <span>R$ 2649,99 à vista com 5% OFF</span>
            </p>
        </div>
    </div>
  )
}

export default SingleItem