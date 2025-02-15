import React, { useState } from 'react';
import { FiBell, FiMessageCircle } from 'react-icons/fi';
import Searchbar from './Searchbar';

const Navbar = () => {
    return (
        <div className='bg-gray-900 text-white w-full flex flex-wrap items-center justify-between p-4 sm:px-8 
            fixed top-0 z-50 shadow-md'>
            
            {/* Left Section - Searchbar */}
            <div className='flex-1 min-w-[200px]'>
                <Searchbar />
            </div>

            {/* Right Section - Icons */}
            <div className='flex items-center gap-4 sm:gap-10'>
                {/* Notification Icon */}
                <div className='relative cursor-pointer'>
                    <FiBell className='text-2xl hover:text-gray-400 transition' />
                    <span className='absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex 
                        items-center justify-center rounded-full'>
                        3
                    </span>
                </div>

                {/* Message Icon */}
                <div className='relative cursor-pointer'>
                    <FiMessageCircle className='text-2xl hover:text-gray-400 transition' />
                    <span className='absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex 
                        items-center justify-center rounded-full'>
                        5
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
