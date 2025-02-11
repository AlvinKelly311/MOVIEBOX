import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFilm } from "react-icons/fa";
import ImageCarousel from './ImageCarousel';

const Intro = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-black h-full'>
      <div className="relative bg-[url('https://hollywoodrecaps.com/wp-content/uploads/2024/09/50-Best-Movies-On-Netflix-April-2024.jpg')] bg-cover bg-center h-screen w-full flex flex-col gap-40">
        <div className='absolute inset-0 backdrop-brightness-50'></div>
        <div className='relative z-10 text-white text-center p-10 flex flex-row justify-between items-center bottom-8'>
          <h1 className="text-2xl font-bold p-5 flex items-center ">
            <FaFilm className="mr-2 text-red-500 font-extrabold" /> Apex.STUDIO
          </h1>

          <button onClick={() => navigate('/login')} className='bg-red-500 w-20 h-fit p-2 font-extrabold hover:bg-red-600 transition cursor-pointer'>
            Sign in
          </button>
        </div>

        <div className='relative z-10 text-white text-center p-10 flex flex-col gap-5'>
          <h1 className='font-extrabold text-6xl'>
            Unlimited movies, TV <br /> shows, and more
          </h1>
          <h3 className='text-xl font-medium'>
            Starts at ₦1,500. Cancel anytime.
          </h3>

          <div className='flex flex-col justify-center items-center gap-8'>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='flex flex-row gap-3 items-center justify-center'>
              <button onClick={() => navigate('/signup')}  className=' px-6 py-3 bg-red-500 text-white text-lg font-semibold hover:bg-red-600 transition cursor-pointer'>Get Started 🤗</button>
            </div>
            
          </div>
        </div>
      </div>
      
      <div className='relative z-10 text-white text-center px-7 flex flex-col gap-5 justify-between items-center bg-black/80 w-full h-full  shadow-lg bottom-7'>
        <div className='relative top-7 flex flex-col justify-between items-center gap-30'>
          <h1 className='relative top-9 text-4xl font-extrabold tracking-widest'>Trending <span className='font-stretch-condensed text-red-500'>Now</span> </h1>
          <div className='flex flex-row justify-center'>
           <ImageCarousel />
          </div>
         
        </div>
       
      </div>
    </div>
  

  

  
  );
}

export default Intro