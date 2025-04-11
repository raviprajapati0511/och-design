import { motion } from 'framer-motion';
import React from 'react'
// import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const Landingpage = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='h-screen w-full pt-1 bg-zinc-900'>
        <div className='textstructure  mt-37 px-13'>
            {["WE CREATE", "EYE OPENING" , "PRESENTATIONS"].map((item,index)=>{
                return <div className='masker'>
                    <div className='w-fit flex items-end  '>
                        {index==1 && (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1] ,duration:1}}  className='w-[8vw] rounded-md mr-[.5vw]  h-[5.6vw]  bg-red-500 relative top-[1.3vw] '></motion.div>)}
                    <h1 className=" text-white pt-[2vw] -mb-[1vw] text-[7.7vw] leading-[5.8vw] -tracking-[.5vw] font-TestFounderGrotesk font-bold">
                    {item}
                </h1>
                    </div>
                
            </div>
            })}
            {/* <div className='masker'>
                <h1 className=" text-white text-8xl leading-[7vw] tracking-tighter font-TestFounderGrotesk font-semibold">
                    WE CREATE
                </h1>
            </div>
            <div className='masker'>
                <h1 className=" text-white text-8xl leading-[7vw] tracking-tighter font-TestFounderGrotesk font-semibold">
                    EYE OPENING
                </h1>
            </div>
            <div className='masker'>
                <h1 className=" text-white text-8xl leading-[7vw] tracking-tighter font-TestFounderGrotesk font-semibold">
                    PRESENTATIONS
                </h1>
             </div> */}
        </div>
        <div className='border-t-[1px] text-white border-zinc-600 mt-32 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
                return <p className='text-white text-md font-light tracking-tight leadingnone'>{item}</p>
            })}

            <div className='start flex items-center gap-2'>
                <div className='px-5 py-2 border-[2px] border-zinc-600 font-light text-sm rounded-full '>START THE PROJECT</div>
                <div className='w-10 h-10 flex items-center justify-center  border-[1px] border-zinc-600 rounded-full'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUp/>
                    </span>
                    
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Landingpage
