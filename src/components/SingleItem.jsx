import React from 'react'
import '../Assets/css/SingleItem.css'

const SingleItem = (props) => {
  return (
    <div className="container-singleItem">
        <div className='singleItem--top'>
            <img src={props.image} alt="Produto da loja" />
            <div className='over-product'>
                <p>ver detalhes</p>
                <p>adicionar no carrinho</p>
            </div>
        </div>
        <div className='singleItem--infos'>
            <p className="singleItem--infos-name">
                {props.name}
            </p>
            <p className='singleItem--infos-price'>R$ {props.old_price}</p>
            <p className='singleItem--infos-price_down'>
                
                ou <span>R$ {props.new_price} à vista com 5% OFF</span>
            </p>
        </div>
    </div>
  )
}

export default SingleItem