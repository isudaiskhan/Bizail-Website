import React from 'react'
import { motion } from 'framer-motion';


const Steps = () => {

  const steps = [
    { title: 'Step 1 : Submit', description: 'Submit your website for review and approval.', delay: 0.2 },
    { title: 'Step 2 : Upload', description: 'Once approved, we\'ll notify you of the detected listings and upload them at no charge.', delay: 0.3 },
    { title: 'Step 3 : Manage', description: 'After completion, we\'ll activate your dashboard where you can then manage your listings. You only pay $1 for new listings—revisions and removals are free.', delay: 0.4 }
  ];


  return (
    <>
     <div className='mt-24 py-12 container mx-auto sm:px-8 px-6'>
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
           className='text-white text-center text-4xl sm:text-5xl font-bold'>Transparent Model, tailored for <span className='text-[#75D481]'>brokers</span>.</motion.h1>
        </div>
        <div className='grid grid-cols-1 py-20 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
              whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
              transition={{ delay: step.delay, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
              className='rounded pb-16 bg-gradient-to-r from-[#1b0a43] to-[#3f2182] flex flex-col items-center relative'
            >
              <h2 className='text-3xl mt-12 text-white text-center font-bold'>{step.title}</h2>
              <p className='mt-9 px-7 text-white text-lg text-center'>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Steps