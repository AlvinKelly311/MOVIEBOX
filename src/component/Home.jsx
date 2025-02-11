import React from 'react';
import Sidebar from './Sidebar';
import Parties from './Parties';
import Watch from './Watch';
import Navbar from './Navbar';
import { FaPlay } from "react-icons/fa";

const Home = () => {
  return (
    <div className='flex flex-col mt-10'>
      <Navbar />
      <div className='flex flex-row justify-between relative top-16'>
        <Sidebar />
        <div className='flex flex-col  relative w-full mr-15'>
          <div className='relative bg-black text-white p-8 rounded-lg flex flex-col w-full h-fit m-8 justify-between md:flex-row '>
      
            <div className='flex flex-col justify-center gap-12'> 
              <div className='flex flex-col gap-4'>
                <h1 className="text-2xl font-bold">Arcane <br />  <span className="text-5xs text-red-500 md:text-6xl">Legend </span>Of <br /><span className=" text-5xs text-blue-500  relative mr-19 md:text-6xl left-27">Legend</span></h1>
                <div className='flex flex-row gap-5'>
                  <p>🇪🇦 <span className='text-xs'>6.6</span></p>
                  <p className='font-extrabold'>. 🇺🇲 <span className='text-xs'>English</span></p>
                </div>
              </div>
        
              <div className='bg-red-500 h-fit w-fit flex flex-row p-2 items-center rounded-lg cursor-pointer'>
                <FaPlay className="mr-2 " size={10} /> Watch
              </div>
        
            </div>

            <div className="text-white p-2 rounded-lg shadow-lg w-full md:w-1/2 mt-4 md:mt-0">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGn2gC8GvoJRTOpL1IIKOrxsoEOZvzuWxxDw&s" alt="Arcane" className="rounded-lg mb-2 w-full h-auto" />   
            </div>

          </div>
          <Parties />
          <Watch />
        </div>
        {/* sidebar */}
      </div>
    </div>
    
  )
}

export default Home