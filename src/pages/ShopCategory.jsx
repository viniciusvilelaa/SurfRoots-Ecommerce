import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import SingleItem from '../components/SingleItem'

const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
  
    return (
    <div className='shop-category'>
        <img id='category-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
        <div className="shopcategory-products">
            {all_products.map((item, i)=>{
                if (props.category === item.category) {
                    return <SingleItem key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}></SingleItem>
                }
            })}
        </div>
    </div>
  )
}

export default ShopCategory