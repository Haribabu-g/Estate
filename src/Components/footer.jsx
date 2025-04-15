import React from 'react'
import { assets } from '../assets/real-estate-assets/assets'


function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
              
          <img src={assets.logo_dark} alt="" />
            
            <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore possimus recusandae repellendus animi nobis minima
            </p>

            </div>

            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
              <a href="#Header" className='hover:text-white'>Home</a>

              <a href="#About" className='hover:text-white'>About</a>


              <a href="#Contact" className='hover:text-white'>Contact</a>

              <a href="#" className='hover:text-white'>Privacy Policy</a>

            </ul>
            </div>
            <div className='w-full md:-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>
              Subcribe to our newsletter
            </h3>
            <p className='text-gray-400 mb-4 max-w-80'>
               The latest news, articles, and resources, sent to your inbox weekly.
            </p>
              <div className='flex gap-2'>
                <input type="email" placeholder='Enter Your Email'
                className='p-2 rounded bg-gray-800 text-gray-400 broder border-gray-700 focus:outline-none w-full md:w-auto '/>
                <button className='py-2 px-4 rounded bg-blue-500 text-white '>
                  Subscribe
                </button>
              </div>

            </div>
        </div>

        <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm">
  Copyright 2025 ©

  <a
    href="https://www.linkedin.com/in/haribabu-g/" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 bg-white text-black px-2 py-[1px] rounded ml-2"
    style={{ verticalAlign: 'middle', height: '1.4 rem' }} // match line height
  >
    <img className="h-4 w-4" src={assets.linkden} alt="LinkedIn" />
    <span className="font-semibold text-xs">Haribabu</span>
  </a>

  <span className="ml-3">All Rights Reserved.</span>
</div>



       
       
         
    </div>
  )
}

export default 
Footer;
