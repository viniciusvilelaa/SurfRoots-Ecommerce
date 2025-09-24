import React, { useContext } from 'react'
import ShopContextProvider, { ShopContext } from '../context/ShopContext'
import './CSS/Product.css'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'

const Product = (props) => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_products.find((e)=>e.id==Number(productId))
  return (
    <div>
      <ProductDisplay product={product}></ProductDisplay>
    </div>
  )
}

export default Product