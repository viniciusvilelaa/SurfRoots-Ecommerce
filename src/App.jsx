import { useState } from 'react'

import './assets/css/App.css'
import Header from "./components/Header.jsx";
import Home from './pages/Home.jsx';
import HeaderBottom from './components/HeaderBottom.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
      <>
        <Header></Header>
        <HeaderBottom></HeaderBottom>
        <Home></Home>
        <Footer></Footer>
      </>
  )
}

export default App
