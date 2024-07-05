import React from 'react'
import heroimg from '../Assets/Hero-img.png'
import image1 from '../Assets/shape-1.png'
import image2 from '../Assets/shape-2.png'
import image3 from '../Assets/text-bottom-line.png'
import { motion } from 'framer-motion';



const Hero = () => {
  return (
    <>


      <div
        className='bg-no-repeat bg-left-bottom'
        style={{ backgroundImage: `url(${image1})` }}>

      <div
        className='bg-no-repeat bg-right'
        style={{ backgroundImage: `url(${image2})` }}>


    <div className='relative w-full mt-16 py-16 sm:px-4 px-2 overflow-hidden' id='home'>
     <div className='max-w-[1240px] mx-auto'>

     <div>
     <motion.h1
           initial={{ y: 80, opacity: 0 }} // Initial position: below its final position and hidden
            whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
            transition={{ 
            delay: 0.4, 
            y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
            opacity: { duration: 0.2 }, // Smooth opacity transition
            ease: "easeIn", // Easing function
            duration: 1 // Overall animation duration
            }}
      className='md:text-6xl text-white sm:text-5xl text-4xl relative text-center font-bold tracking-wide py-2' style={{lineHeight:'4rem'}}>Your <span className='text-[#9DCD5A]'>listings</span> deserve to be visited.</motion.h1>
     <img src={image3} className='mx-auto -mt-20' />

     <div>
     <motion.img
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
        src={heroimg} className="w-[600px] mx-auto" />
      </div>
      </div>
    </div>
      </div>

      </div>
      </div>
    </>
  )
}

export default Hero