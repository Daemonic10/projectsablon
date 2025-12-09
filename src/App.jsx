import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Portofolio from './components/Portofolio'
import About from './components/about'
import Cta from './components/Cta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
    <div className='bg-gray-200'>

<Navbar/>
<Hero/>
<Service/>
<Portofolio/>
<About/>
<Cta/>
<Contact/>
<Footer/>




    </div>
    </>
  )
}

export default App
