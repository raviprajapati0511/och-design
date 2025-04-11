import React from 'react'
import {motion} from "framer-motion";
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43] '>
        <div className='text border-t-2 border-b-2 border-zinc-300 pr-20 space-x-3 whitespace-nowrap flex  overflow-hidden' >
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[22vw] leading-none -tracking-[2.5vw]  font-TestFounderGrotesk font-semibold relative -top-4  '>WE ARE OCHI </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[22vw] leading-none -tracking-[2.5vw] font-TestFounderGrotesk font-semibold relative -top-4 '> WE ARE OCHI</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
