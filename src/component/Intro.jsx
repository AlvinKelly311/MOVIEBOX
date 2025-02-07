import React from 'react'
import { useNavigate } from 'react-router-dom'


const Intro = () => {
   const navigate = useNavigate()
  return (
    <div>
        <div className="relative z-10">
  <h1 className="text-5xl font-bold">Find Your Next Favorite Movie</h1>
  <p className="text-gray-300 mt-2">Browse the latest and trending movies</p>
  
{/* Search Bar */}
  {/* <div className="mt-6 flex items-center bg-white rounded-full px-4 py-2 w-[300px] mx-auto">
    <input
      type="text"
      placeholder="Search movies..."
      className="flex-grow text-black outline-none px-2"
      value={Search}
      onChange={(e) => Search(e.target.value)}
    />
  </div> */}

  {/* Get Started Button */}
  <button 
  onClick={() => navigate('/login')}
  className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-full hover:bg-red-600 transition">
    Get Started
  </button>
</div>

    </div>
  )
}

export default Intro