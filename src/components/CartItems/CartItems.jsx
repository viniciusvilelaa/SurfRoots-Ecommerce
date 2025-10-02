import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../Assets/cart_cross_icon.png'
export const CartItems = () => {

    const { all_products, cartItems, removeFromCart, getTotalCart} = useContext(ShopContext);


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
                    return <div key={e.id}>
                        <div className='cartitems-format cartItems-format-main'>
                            <img src={e.image} alt="" className="carticon-product-icon" />
                            <p>{e.name}</p>
                            <p>R${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>R${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitem-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>R${getTotalCart()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>R${getTotalCart()}</h3>
                        </div>
                    </div>
                    <button>FINALIZAR COMPRA</button>
                </div>
                
                <div className="cartitems-promocode">
                    <p>Se você tiver um código promocional, insira aqui!</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='CUPOM' />
                        <button>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
