import React from 'react'
import pic5 from '../assets/pic5.png'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-black flex items-center gap-5 px-20'>
        <div className='cardcontainer h-[50vh] w-1/2 '>
        <div className='card relative w-full flex items-center justify-center rounded-xl h-full bg-[#29776d] '>
            <h1 className='text-white text-7xl text-semibold'>ochi</h1>
            <button className=' absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full' >&copy; 2025-2026</button>
        </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2 '>
        <div className='card relative w-1/2 rounded-xl flex items-center justify-center h-full bg-[#004D43] '>
            <h1 className='text-white text-7xl text-semibold'>Clutch</h1>
            <button className=' absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full' >&copy; 2025-2026</button>
        </div>
        <div className='card relative w-1/2 rounded-xl h-full bg-[#0d3e37] '>
        <img className='card w-full rounded-xl h-full' src={pic5} alt="logo" />
      
        </div>
        </div>

      
    </div>
  )
}

export default Cards
