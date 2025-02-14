import React, { useState } from 'react';
import { FaFilm, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { FiChrome, FiHeart, FiCalendar, FiWifiOff } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../AUTH SERVICE/Logindetails'
import { FaPlay } from "react-icons/fa";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const handlelogout = async()=> {
    await logout()
    alert('Logged out successfully!')
    navigate('/')
  }

  return (
    <div>
 
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-900 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`flex flex-col w-64 h-full bg-gray-900 text-white fixed md:relative ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}> 
        <h1 className="text-2xl font-bold p-5 flex items-center">
          <FaFilm className="mr-2 text-red-500" /> Apex.STUDIO
        </h1>
        <div className='flex-grow'>
          <p className='text-gray-500 text-xs p-5 space-y-4'>News Feed</p>
          <nav>
            <ul className='p-5 space-y-4 text-gray-500 cursor-pointer'> 
                <li className='flex flex-row gap-5'><FiChrome size={20} className='text-red-500' />Browse</li>
                <NavLink to='/moviedetails' className='flex flex-row gap-5'><FiHeart size={20} />Watchlist</NavLink>
                <NavLink to='/home' className='flex flex-row gap-5'><FaPlay size={20} />MOVIE</NavLink>
                <li className='flex flex-row gap-5'><FiCalendar size={20} />Coming soon</li>
               
                
            </ul>
          </nav>
        </div>
        <div className='flex-grow p-5 space-y-5 text-gray-500 cursor-pointer'>
          <p className='text-xs'>Following</p>

          <button onClick={handlelogout} className='p-5 flex items-center text-gray-400 hover:text-red-500 cursor-pointer relative right-4 mt-13 top-30'>
            <FaSignOutAlt className='mr-2' /> Log Out
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
