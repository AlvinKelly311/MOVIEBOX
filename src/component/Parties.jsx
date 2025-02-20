import React, { useContext } from 'react'
import {MovieAPI} from '../ContextAPI/MovieAPI.jsx';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Parties = () => {
  const { movies, loading, error,handleMovielist } = useContext(MovieAPI);
  const navigate = useNavigate()

  const handledetail =(imdbID)=>{
    handleMovielist(imdbID)
    navigate('/moviedetails')
  }
  return (
    <div>
        <div className='relative text-black p-9 flex flex-col gap-8'>
        <h3 className='text-red-600 font-extrabold text-2xl'>COMING SOON</h3>
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

          <div className='flex flex-row gap-4 bg-gray-900 h-1/2 p-4 text-white rounded-lg md:flex-row'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOSmAJ70SPaOcElmRpN4LCu4SCEXNfwqktQ&s" alt="Mortal Engines" className='w-18 h-fit'/>
            <div className='flex flex-col justify-between'>
                <div>
                  <h3>Mortal Engines</h3>
                  <p className='text-gray-500'>Science Fiction</p>
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
      
      
      <section className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 ">
      <h3 className='text-red-600 font-extrabold text-2xl'>Treanding Movies</h3>
        
  {/* Loading & Error Messages */}
  {loading && <Loading />}
  {error && <p className="text-red-400 text-center">{error}</p>}

  {/* Movie Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-[3rem]">
    {movies.map((movie) => (
      <button 
        onClick={() => handledetail(movie.imdbID)} 
        key={movie.imdbID} 
        className="hover:bg-gray-700 transition duration-300 p-4 rounded-lg text-center"
      >
       <div className="bg-gray-800 p-4 rounded-lg shadow-lg ">
  {/* Movie Poster */}
  <img 
    src={movie.Poster} 
    alt={movie.Title} 
    className="w-full h-2/3 object-cover rounded-lg"
  />
  
  {/* Movie Details */}
  <div className="w-full h-1/3 text-center">
    <h3 className="text-sm font-semibold text-white">{movie.Title}</h3>
    <p className="text-gray-400 text-sm">{movie.Year}</p>
  </div>
</div>

      </button>
    ))}
  </div>
</section>

  
      
    
    </div>
  )
}

export default Parties