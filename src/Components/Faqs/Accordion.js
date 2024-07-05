import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Accordions = ({ items }) => {
  const [activeIndexCol1, setActiveIndexCol1] = useState(null);
  const [activeIndexCol2, setActiveIndexCol2] = useState(null);

  const handleItemClickCol1 = (index) => {
    if (index === activeIndexCol1) {
      setActiveIndexCol1(null); // Close if already open
    } else {
      setActiveIndexCol1(index);
      setActiveIndexCol2(null); // Close any open item in the second column
    }
  };

  const handleItemClickCol2 = (index) => {
    if (index === activeIndexCol2) {
      setActiveIndexCol2(null); // Close if already open
    } else {
      setActiveIndexCol2(index);
      setActiveIndexCol1(null); // Close any open item in the first column
    }
  };

  const renderAccordionItem = (item, index, activeIndex, handleItemClick) => (
    <div key={index} className="mb-6">
      <div
        className={`flex justify-between group text-white rounded bg-gradient-to-r from-[#1b0a43] to-[#3f2182] items-center shadow-xl p-7 cursor-pointer select-none ${
          index === activeIndex ? 'bg-gray-100' : ''
        }`}
        onClick={() => handleItemClick(index)}
      >
        <div className='font-semibold'>
          {item.title}
        </div>
        <div>
          {index === activeIndex ? <FaMinus className='rounded-full text-white outline-1 text-sm outline outline-offset-4 outline-white' /> : <FaPlus className='rounded-full text-white outline-1 text-sm outline outline-offset-4 outline-white' />}
        </div>
      </div>
      {index === activeIndex && (
        <div className="p-6 text-white">{item.content}</div>
      )}
    </div>
  );

  // Divide items into two columns
  const midPoint = Math.ceil(items.length / 2);
  const itemsCol1 = items.slice(0, midPoint);
  const itemsCol2 = items.slice(midPoint);

  return (
    <>
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
        className='w-full py-10 mt-10 xl:px-4'
      >
        <h1 className='text-center sm:text-5xl text-4xl font-bold text-white'>Frequently Asked Questions</h1>
        <p className='text-center mt-7 text-white text-lg'>Got more questions? Feel free to contact us for more information.</p>

        <div className='mt-20 container grid lg:grid-cols-2 xl:gap-x-10 gap-6 mx-auto'>
          <div>
            {itemsCol1.map((item, index) => renderAccordionItem(item, index, activeIndexCol1, handleItemClickCol1))}
          </div>
          <div>
            {itemsCol2.map((item, index) => renderAccordionItem(item, index, activeIndexCol2, handleItemClickCol2))}
          </div>
        </div>

        <div className='flex justify-center mt-14'>
          <button className="bg-white text-[#13072E] shadow-2xl hover:shadow-none shadow-white font-semibold py-3 px-10 rounded-full">
            Contact us
          </button>
        </div>
      </motion.div>
      <div>
      </div>
    </>
  );
};

export default Accordions;