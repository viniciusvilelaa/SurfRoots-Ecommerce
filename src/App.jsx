import { useState } from 'react'

import './Assets/css/App.css'
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx'
import LoginSignup from './pages/LoginSignup.jsx';
import HeaderBottom from './components/HeaderBottom.jsx';
import Newsletter from './components/Newsletter.jsx';
import MediumHero from './components/MediumHero.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Footer } from './components/footer/footer.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import men_banner from './Assets/mens_banner.jpeg'
import kid_banner from './Assets/kids_banner.jpg'
import women_banner from './Assets/women_banner.jpg'
function App() {

  return (
      <>
      <BrowserRouter>
      <Navbar></Navbar>
      <HeaderBottom></HeaderBottom>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product></Product>} />
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Newsletter></Newsletter>
      <Footer></Footer>
      </BrowserRouter>
      </>
  )
}

export default App
