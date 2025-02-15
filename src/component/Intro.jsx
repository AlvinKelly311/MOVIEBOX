import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFilm } from "react-icons/fa";
import ImageCarousel from './ImageCarousel';

const Intro = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-black min-h-screen'>
      {/* Hero Section */}
      <div className="relative bg-[url('https://hollywoodrecaps.com/wp-content/uploads/2024/09/50-Best-Movies-On-Netflix-April-2024.jpg')] bg-cover bg-center h-screen w-full flex flex-col gap-20 sm:gap-28">
        <div className='absolute inset-0 backdrop-brightness-50'></div>

        {/* Navbar */}
        <div className='relative z-10 text-white text-center px-5 sm:px-10 flex flex-row justify-between items-center py-5'>
          <h1 className="text-xl sm:text-2xl font-bold flex items-center">
            <FaFilm className="mr-2 text-red-500 font-extrabold" /> Apex.STUDIO
          </h1>

          <button onClick={() => navigate('/login')} 
            className='bg-red-500 px-4 py-2 text-sm sm:text-base font-extrabold hover:bg-red-600 transition cursor-pointer rounded-md'>
            Sign in
          </button>
        </div>

        {/* Hero Content */}
        <div className='relative z-10 text-white text-center px-5 sm:px-10 flex flex-col gap-5'>
          <h1 className='font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-tight'>
            Unlimited movies, TV <br className='hidden sm:block' /> shows, and more
          </h1>
          <h3 className='text-base sm:text-xl font-medium'>
            Starts at ₦1,500. Cancel anytime.
          </h3>

          <div className='flex flex-col gap-6 items-center'>
            <p className='text-sm sm:text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
            <button onClick={() => navigate('/signup')}  
              className='px-5 py-3 sm:px-6 sm:py-3 bg-red-500 text-white text-lg font-semibold hover:bg-red-600 transition cursor-pointer rounded-md'>
              Get Started 🤗
            </button>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className='relative z-10 text-white text-center px-5 sm:px-10 flex flex-col gap-8 bg-black/80 w-full py-10 shadow-lg'>
        <h1 className='text-2xl sm:text-4xl font-extrabold tracking-widest'>
          Trending <span className='text-red-500'>Now</span>
        </h1>
        <div className='flex justify-center w-full'>
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}

export default Intro;
