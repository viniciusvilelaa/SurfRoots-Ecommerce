import React from 'react'
import '../Assets/css/SingleItem.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const SingleItem = (props) => {
    const {addToCart} = useContext(ShopContext);

    return (
        <div className="container-singleItem">
            <div className='singleItem--top'>
                <img src={props.image} alt="Produto da loja" />
                <div className='over-product'>
                    <Link to={`/product/${props.id}`}><p onClick={()=>{window.scroll(0, 0)}}>ver detalhes</p></Link>
                    <p onClick={()=>{addToCart(props.id)}}>adicionar no carrinho</p>
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