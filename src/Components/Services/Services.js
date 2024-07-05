import React from 'react'
import image1 from '../Assets/icon-1.webp'
import image2 from '../Assets/icon-2.webp'
import image3 from '../Assets/icon-3.webp'
import image4 from '../Assets/icon-4.png'
import image5 from '../Assets/icon-5.webp'
import image6 from '../Assets/icon-6.webp'
import bgimage1 from '../Assets/services-1.png'
import { motion } from 'framer-motion';



const Services = () => {
    const features = [
        { icon: image1, text: 'Enhance your visibility and reach a wider audience.', delay: 0.2 },
        { icon: image2, text: 'Increase the number of visitors directed to your site.' , delay: 0.3 },
        { icon: image3, text: 'No need to upload listings yourself, allowing you to focus on what you love selling businesses.' , delay: 0.4 },
        { icon: image4, text: 'No monthly subscriptions—opt for our pay-as-you-list plan.', delay: 0.5 },
        { icon: image5, text: 'Listings remain on the site as long as they are available for sale.' , delay: 0.6 },
        { icon: image6, text: 'We understand that listings change. Request revisions for free.' ,  delay: 0.6 }
      ];
  return (
    <>


<div className="container mx-auto px-2 py-14 mt-16 border-t-2 border-t-[#81039B]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
              whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
              transition={{ delay: Services.delay, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
            className="flex items-center space-x-5 p-4 rounded-lg shadow-sm"
          >
            <img className='w-16 h-16 p-1 bg-gray-200 rounded-full' src=
              {feature.icon}
           />
            <div className="text-white">
              {feature.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className='flex justify-center mt-16'>
    <button className="bg-white text-[#13072E] shadow-2xl hover:shadow-none shadow-white font-semibold py-3 px-10 rounded-full">
       Create Account
    </button>
    </div>
    </div>
    <div className='flex'>
    <img src={bgimage1} />     
    <img src={bgimage1} className='ml-auto rotate-180' />
    </div>

      
    </>
  )
}

export default Services