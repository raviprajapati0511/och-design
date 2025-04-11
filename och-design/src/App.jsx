import React from 'react'
import Navbar from './compnents/navbar'
import Landingpage from './compnents/Landingpage'
import Marquee from './compnents/Marquee'
import About from './compnents/About'
import Eyes from './compnents/Eyes'
import Featured from './compnents/Featured'
import Cards from './compnents/Cards'
import Footer from './compnents/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotivescroll=new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
    <Navbar/>
    <Landingpage/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Cards/>
    <Footer/>
    </div>
      
    
  )
}

export default App
