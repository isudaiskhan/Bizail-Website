import React from 'react'
import image from '../Assets/laptop.png'
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';




const SearchExposure = () => {

  const searchInputs = [
    { placeholder: 'Air, Land, and Sea Transportation Businesses for Sale', widthClass: 'w-full', delay: 0.2 },
    { placeholder: 'Trucking companies for sale', widthClass: 'sm:w-7/12 w-full sm:py-3', delay: 0.3 },
    { placeholder: 'Delivery businesses for sale', widthClass: 'sm:w-7/12 w-full ml-auto', delay: 0.4 },
    { placeholder: 'Freight forwarding companies for sale', widthClass: 'sm:w-7/12 w-full', delay: 0.5 },
    { placeholder: 'Box truck routes for sale' ,widthClass: 'sm:w-7/12 w-full ml-auto', delay: 0.5 },
  ];

  return (
    <>

<div className='relative w-full mt-5 py-16 px-4 overflow-hidden' id='home'>
      <div className='container mx-auto py-12 lg:space-x-16 flex flex-col xl:flex-row border-t-2 border-t-[#81039B]'>
        <div className='xl:w-2/3 lg:mt-2 lg:px-4'>
          {searchInputs.map((input, index) => (
            <motion.div key={index}
             initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
              whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
              transition={{ delay: SearchExposure.delay, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
             className={`flex ${index === 0 ? 'justify-center' : ''} ${index === 2 || index === 4 ? 'ml-auto' : ''} items-center mt-6 ${input.widthClass}`}>
              <div className={`rounded-lg shadow-md w-full relative`}>
                <input
                  type='text'
                  placeholder={input.placeholder}
                  className={`py-${index === 0 ? '6' : '4'} rounded-full focus:border-transparent border-2 caret-white bg-transparent text-white focus:outline-none focus:ring focus:ring-[#9DCD5A] w-full px-6 placeholder:text-white sm:placeholder:text-base placeholder:text-xs`}
                />
                <button className={`p-${index === 0 ? '6' : '4'} absolute top-0 right-0`}>
                  <FaSearch className='text-white text-2xl' />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Text: Maximum search exposure */}
          <motion.div
           initial={{ y: 80, opacity: 0 }} // Initial position: below its final position and hidden
            whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
            transition={{ 
            delay: 0.4, 
            y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
            opacity: { duration: 0.2 }, // Smooth opacity transition
            ease: "easeIn", // Easing function
            duration: 1 // Overall animation duration
            }}
           className='my-14 px-2'>
            <h1 className='text-white mb-7 sm:text-6xl text-5xl font-bold'>Maximum search exposure</h1>
            <p className='text-white text-lg'>We add multiple search tags to your listings to increase their visibility.</p>
          </motion.div>
        </div>
        
        {/* image */}
        <div>
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
          src={image} alt='Image' className='lg:ml-auto mx-auto mt-4' />
        </div>
      </div>
    </div>
      
    </>
  )
}

export default SearchExposure