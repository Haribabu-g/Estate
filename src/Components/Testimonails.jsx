import React from 'react'
import { assets, testimonialsData } from '../assets/real-estate-assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function Testimonails() {
  return (
    <motion.div 
    
    initial={{opacity:0,x:100}}
    transition={{duration: 1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once: true}}
    
    
    
    
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Customer
            <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonials
            </span>
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
            Real Stories from Those Who Found Home with Us

        </p>

         <div className='flex flex-wrap justify-center gap-8'>

            {testimonialsData.map((Testimonail , index)=>(
                <div
                key={index}
                className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-black active:scale-95 cursor-pointer"
              >
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src={Testimonail.image}
                  alt={Testimonail.alt}
                />
                <h2 className="text-xl text-gray-700 font-medium">{Testimonail.name}</h2>
                <p className="text-gray-500 mb-4 text-sm">{Testimonail.title}</p>
              
              

                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {Array.from({length: Testimonail.rating},(item,index)=>(<img key={index} src={assets.star_icon} alt=""/>))}
                    </div>

                    <p className='text-gray-600'>{Testimonail.text}</p>

                </div>

            ))}

         </div>
    </motion.div>
  )
}

export default Testimonails