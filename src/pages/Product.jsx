import React, { useContext } from 'react'
import ShopContextProvider, { ShopContext } from '../context/ShopContext'
import './CSS/Product.css'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import NewCollections from '../components/NewCollections'

const Product = (props) => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_products.find((e)=>e.id==Number(productId))
  return (
    <div>
      <ProductDisplay product={product}></ProductDisplay>
      <NewCollections></NewCollections>
    </div>
  )
}

export default Product