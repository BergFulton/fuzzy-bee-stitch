import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Greeting from './Greeting'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './Main/About'

function App() {

  return (
    <>
  <Header/>
  <main>
    <About/>
  </main>
  <Footer/>
    </>
  )
}

export default App
