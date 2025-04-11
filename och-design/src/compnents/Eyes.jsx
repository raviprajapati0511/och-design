import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate,setRotate]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let x=e.clientX;
            let y=e.clientY;

            // console.log(y,x);

            let dx=x-window.innerWidth/2;
            let dy=y-window.innerHeight/2;

            // console.log(dy,dx);

            var angle= Math.atan2(dy,dx)*(180/Math.PI);
            setRotate(angle-180);
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden '>
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-full bg-cover bg-center relative 
         bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]' >
            <div data-scroll data-scroll-section data-scroll-speed="-.3" className='absolute top-1/2 left-1/2 flex gap-15 -translate-y-[50%] -translate-x-[50%] '>
                <div className='w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100 '>
                    <div className='w-2/3 h-2/3 relative flex items-center justify-center  rounded-full bg-zinc-900 '>
                    <h1>PLAY</h1>
                        <div style={{transform:`translate(-0% ,-0%) rotate(${rotate}deg)`}} className='line w-full absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] h-5'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100 '></div>
                        </div>
                        
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100 '>
                <div className='w-2/3 h-2/3 flex items-center justify-center relative rounded-full bg-zinc-900 '>
                <h1>PLAY</h1>
                <div style={{transform:`translate(-0% ,-0%) rotate(${rotate}deg)`}} className='line w-full  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] h-10'>
                    <div className='w-5 h-5 rounded-full bg-zinc-100 '></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Eyes
