import React, { useContext } from 'react'
import {MovieAPI} from '../ContextAPI/MovieAPI.jsx';

const Parties = () => {
  const { movies, loading, error } = useContext(MovieAPI);
  return (
    <div>
        <div className='relative text-black p-8 flex flex-col gap-8'>
        <h3 className='text-red-600 font-extrabold text-2xl'>Parties</h3>
        <div className=' flex flex-col gap-10 justify-between md:flex-row '>
          <div className='flex flex-row gap-4 bg-gray-900 h-35 p-4 text-white rounded-lg md:flex-row'>
            <img src="https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg" alt="Spiderman"  className='w-18 h-fit'/>
            <div className='flex flex-col justify-between'>
              <div>
                <h3>Spider Man</h3>
                <p className='text-gray-500'> Science Fiction, Fantasy</p>
              </div>
              <div>
                <p className='text-gray-500 text-xs'>Rate <span className='text-xl'>.7.5</span></p>
              </div>
            </div>
            
          </div>

          <div className='flex flex-row gap-6 bg-gray-900 h-35  p-4 text-white rounded-lg md:flex-row'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTky1XNG-ZvEVpPSN1wFi0FFJ6EBEwD4F-GvQ&s" alt="Wonder-Woman" className='w-18 h-fit' />
            <div className='flex flex-col justify-between'>
              <div>
                <h3>Wonder Woman</h3>
                <p className='text-gray-500'> Adventure, Action</p>
              </div>
              <div>
                <p className='text-gray-500 text-xs'>
                    Rate <span className='text-xl'>
                        .5.9
                    </span>
                </p>
              </div>
            </div>
            
          </div>

          <div className='flex flex-row gap-4 bg-gray-900 h-35 p-4 text-white rounded-lg md:flex-row'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOSmAJ70SPaOcElmRpN4LCu4SCEXNfwqktQ&s" alt="Mortal Engines" className='w-18 h-fit'/>
            <div className='flex flex-col justify-between'>
                <div>
                  <h3>Mortal Engines</h3>
                  <p className='text-gray-500'>Science Fiction, Engines</p>
                </div>
                <div>
                <p className='text-gray-500 text-xs'>
                    Rate <span className='text-xl'>
                        .9.9
                    </span>
                </p>
               </div>
            </div>
            
          </div>

          <div className='flex flex-row gap-4 bg-gray-900 h-35 p-5 text-white rounded-lg md:flex-row'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbX0nGeYYDN2Q7VJZPW30tYIMyB7Sh05bKcw&s" alt="Rampage" className='w-18 h-fit' />
            <div className='flex flex-col justify-between'>
              <div>
                <h3>Rampage</h3>
                <p className='text-gray-500'>Adventure, Action</p>
              </div>
              
              <div>
                <p className='text-gray-500 text-xs'>
                    Rate <span className='text-xl'>
                        .4.9
                    </span>
                </p>
               </div>
            </div>
            
          </div>
        </div>
      </div>

    <section>
        {/* movie */}
   {loading && <p className="text-white text-center">Loading...</p>}
        {error && <p className="text-red-400 text-center">{error}</p>}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
          {movies.length > 0 ? (
          
          movies.map((movie) => (
            <div key={movie.imdbID} className="bg-gray-800 p-4 rounded-lg text-center h-70">
              <img src={movie.Poster} alt={movie.Title} className="w-full h-44 object-cover rounded-lg" />
              <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
              <p className="text-gray-400">{movie.Year}</p>
            </div>
          ))
          ) : <p>no movie found</p>}
        </div>
    </section>
  
    </div>
  )
}

export default Parties