import { useState } from 'react'

import './assets/css/App.css'
import Header from "./components/Header.jsx";
import Home from './pages/Home.jsx';
import HeaderBottom from './components/HeaderBottom.jsx';
import Newsletter from './components/Newsletter.jsx';
import MediumHero from './components/MediumHero.jsx';
function App() {

  return (
      <>
        <Header></Header>
        <HeaderBottom></HeaderBottom>
        <Home></Home>
        <Newsletter></Newsletter>
        <MediumHero></MediumHero>
      </>
  )
}

export default App
