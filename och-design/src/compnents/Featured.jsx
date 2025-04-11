import React, { useState } from 'react'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import { motion } from 'framer-motion'

const Featured = () => {
    const [isHovering,setHovering]=useState(false);
    const[ishovering1,SetHovering1] = useState(false)
    
  return (
    <div className='w-full py-10'>
        <div className='w-full px-20 border-b-[2px] border-zinc-600 pb-20 '>
            <h1 className='text-8xl font-NeueMontreal tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
            <div className='cards flex w-full gap-10 mt-10 ' >
                <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}  className='cardcontainer  relative w-1/2 h-[80vh] '>
                    <div  className='flex items-center gap-3 mb-3'>
                        <div className='h-2 w-2 rounded-full bg-white '>

                        </div>
                        <h1>Salience Labs</h1>
                    </div>
                    <div className='overflow-hidden'>
                        <h1 className='absolute flex z-[9] text-[#CDEA68] overflow-hidden left-full  -translate-x-1/2 top-1/2 -translate-y-1/2 uppercase  text-6xl font-semibold leading-none tracking-tighter font-NeueMontreal ' >
                        {"Salience Labs".split('').map((item,index)=>
                        <motion.span initial={{}} 
                        animate={isHovering ? {y:"0%"}:{y:"100%"}}
                        transition={{ease:[.22,1,.36,1],delay:index*.06}} className='inline-block' >
                        {item}
                        </motion.span>)}
                        </h1>
                    </div>
                
                <div className='card w-full h-full rounded-xl'>
                    <img className='card w-full h-full rounded-xl bg-cover' src={pic2} alt="pr1" />
                </div>
                </div>
                <div onMouseEnter={()=>SetHovering1(true)} onMouseLeave={()=>SetHovering1(false)}  className='cardcontainer  relative w-1/2 h-[80vh] '>
                    <div  className='flex items-center gap-3 mb-3'>
                        <div className='h-2 w-2 rounded-full bg-white '>

                        </div>
                        <h1>Cardboard Spaceship</h1>
                    </div>
                    <div className='overflow-hidden'>
                        <h1 className='absolute flex z-[9] text-[#CDEA68] overflow-hidden left-0  -translate-x-1/2 top-1/2 -translate-y-1/2  text-6xl font-semibold leading-none tracking-tighter uppercase font-NeueMontreal ' >
                        {"Cardboard Spaceship".split('').map((item,index)=>
                        <motion.span initial={{}} 
                        animate={ishovering1 ? {y:"0%"}:{y:"100%"}}
                        transition={{ease:[.22,1,.36,1],delay:index*.06}} className='inline-block' >
                        {item}
                        </motion.span>)}
                        </h1>
                    </div>
                
                <div className='card w-full h-full rounded-xl'>
                    <img className='card w-full h-full rounded-xl bg-cover' src={pic3} alt="pr1" />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
