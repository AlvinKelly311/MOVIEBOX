import React, { useState } from 'react';
import { FaFilm, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { FiChrome, FiHeart, FiCalendar, FiWifiOff } from 'react-icons/fi';
// import g from '../assets/g.jpeg';
// import F1 from '../assets/f1.jpg';
// import fine from '../assets/fine.jpg';
// import too from '../assets/too.jpg';
// import bby from '../assets/bby.jpg';
// import race from '../assets/race.jpeg';
// import ek from '../assets/ek.jpeg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                <li className='flex flex-row gap-5'><FiHeart size={20} />Watchlist</li>
                <li className='flex flex-row gap-5'><FiCalendar size={20} />Coming soon</li>
            </ul>
          </nav>
        </div>
        <div className='flex-grow p-5 space-y-5 text-gray-500 cursor-pointer'>
          <p className='text-xs'>Following</p>
          {/* <nav className='flex-grow p-5 space-x-4 flex flex-col items-center justify-center gap-7'>
            {[{ img: g, name: "Elvis", online: false },
              { img: F1, name: "Simon", online: true },
              { img: fine, name: "Val", online: false },
              { img: too, name: "Alex", online: true },
              { img: bby, name: "David", online: true },
              { img: race, name: "Peter", online: true },
              { img: ek, name: "Rendra", online: true }].map((user, index) => (
              <div key={index} className='flex flex-row gap-15 items-center justify-center  relative right-8'>
                <div className='flex flex-row gap-3 items-center justify-center'>
                  <img src={user.img} alt="Profile" className='w-5.5 h-5.5 rounded-full object-cover' /> 
                  <p>{user.name}</p>
                </div>
                <div className='relative'>
                  {user.online ? (
                    <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full" style={{ marginTop: -3, marginRight: 8 }} />
                  ) : (
                    <FiWifiOff size={15} />
                  )}
                </div>
              </div>
            ))}
          </nav> */}

          <button className='p-5 flex items-center text-gray-400 hover:text-red-500 cursor-pointer relative right-4 mt-13 top-30'>
            <FaSignOutAlt className='mr-2' /> Log Out
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
