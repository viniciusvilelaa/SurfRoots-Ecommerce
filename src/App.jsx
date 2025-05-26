import { useState } from 'react'

import './assets/css/App.css'
import Header from "./components/Header.jsx";
import Carousel from './components/Carousel.jsx';
import Home from './pages/Home.jsx';

function App() {

  return (
      <>
        <Header></Header>
        <Home></Home>
      </>
  )
}

export default App
