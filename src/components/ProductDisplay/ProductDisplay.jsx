import React, { useContext } from 'react'
import Breadcrum from '../Breadcrums/Breadcrum';
import './ProductDisplay.css'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;

    const {addToCart} = useContext(ShopContext);


    return (
        <div className='productdisplay-container'>
            <div className="productdisplay-left">
                <Breadcrum product={product}></Breadcrum>
                <div className="productimage-left">
                    <img id="product-image" src={product.image} alt="" />
                    <div className='productimage-list'>
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                </div>
                
                
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-prices'>
                    <span id='old_price'>R${product.old_price}</span>
                    <span>R${product.new_price}</span>
                </div>
                
                <div className='productdisplay-rigt-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-size'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADICIONAR AO CARRINHO</button>
                <p className='product-description'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit quos minima quidem ipsum magni aperiam, animi aut dolore atque cumque,
                    neque repellendus dolorem in ullam laborum voluptate nihil deleniti adipisci?<br /><br />
                    Category: {product.category}
                </p>
                
                
            </div>
        </div>
    )
}

export default ProductDisplay