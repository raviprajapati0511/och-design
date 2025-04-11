import React from 'react'
import pic1 from '../assets/pic1.jpg'


const About = () => {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-NeueMontreal text-[3vw] tracking-tight leading-[4 .5vw]'>Ochi is a strategic presentation agency for 
        forward-thinking businesses that need to raise funds, sell prod­ucts
        , ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full flex border-t-[1px] mt-12 border-[#a1b562'>
            <div className='w-[20vw] '><h1>What you can expect:</h1></div>
            <div className='w-[20vw] ml-[25vw] '><h1>We partner with the companies and startups who         make the 
                world go round — they drive the net-zero 
                economy, revolutionize crypto treasury management,
                 build photonic chips, and open Michelin-starred restaurants.

                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
                </div>
                <div className='w-[2vw] relative left-[10vw] top-[12vw]'>
                        <h1>S:

                        Instagram
                        Behance
                        Facebook
                        Linkedin
                        </h1>
                </div>
            

        </div>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562'>
            <div className='w-1/2'>
            <h1 className='text-6xl'>Our Approach:</h1>
            <button className='px-10 flex gap-10 items-center py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded full '></div>
            </button>   
            </div>
            <div className='w-1/2 rounded-2xl h-[70vh] bg-red-600  '>
            <img src={pic1} alt="ladka-ladki" className=' rounded-2xl h-[70vh]' />
            </div>
        </div>
    </div>
  )
}

export default About
