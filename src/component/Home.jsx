import React from 'react';
import Sidebar from './Sidebar';
import Parties from './Parties';
import Navbar from './Navbar';
import { FaPlay } from "react-icons/fa";
import Footer from './Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow justify-between relative top-16 px-4 md:px-10">
        <Sidebar />
        <div className="flex flex-col w-full md:ml-5">
          {/* Featured Movie Section */}
          <div className="bg-black text-white p-6 rounded-lg flex flex-col md:flex-row w-full h-fit mt-6 shadow-lg">
            <div className="flex flex-col gap-6 md:w-1/2">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Arcane <br />
                <span className="text-red-500">Legend</span> Of <br />
                <span className="text-blue-500">Legend</span>
              </h1>
              <div className="flex flex-row gap-5 text-sm sm:text-base">
                <p>🇪🇦 <span className="text-xs sm:text-sm">6.6</span></p>
                <p className="font-extrabold">
                  🇺🇲 <span className="text-xs sm:text-sm">English</span>
                </p>
              </div>
              <button className="bg-red-500 px-4 py-2 flex items-center gap-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-600 transition cursor-pointer w-fit">
                <FaPlay size={14} /> Watch
              </button>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGn2gC8GvoJRTOpL1IIKOrxsoEOZvzuWxxDw&s"
                alt="Arcane"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <Parties />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

  


export default Home;
