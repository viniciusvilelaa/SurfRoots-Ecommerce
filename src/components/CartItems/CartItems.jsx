import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../Assets/cart_cross_icon.png'
export const CartItems = () => {

    const { all_products, cartItems, removeFromCart } = useContext(ShopContext);


    return (
        <div className='cartitems'>
            <div className="cartItems-format-main">
                <p>Produtos</p>
                <p>Titulo</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
                <p>Remover</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='cartitems-format'>
                            <img src={e.image} alt="" className="carticon-product-icon" />
                            <p>{e.name}</p>
                            <p>R${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
            })}
        </div>
    )
}
