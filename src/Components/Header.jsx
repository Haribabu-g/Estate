import React from 'react'
import Navbar from './Navbar'

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden brightness-100' style={{backgroundImage: "url('/ghibli-image-homesample.webp')"}} id='Header'>
        <Navbar/>
        <motion.div 
        initial={{opacity:0,y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity:1,y:0}}
        viewport={{once: true}}

        
        
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>

            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Find homes that bring your dreams to life</h2>

            <div className='space-x-6 mt-16'>

                <a href="#Projects" className='border bg-white/20 backdrop-blur-md    border-white px-8 py-3 rounded'>Projects</a>

                <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>

            </div>
        </motion.div>
    </div>
  )
}

export default Header