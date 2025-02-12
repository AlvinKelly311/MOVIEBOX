import React, { useContext } from 'react'
import { MovieAPI } from '../ContextAPI/MovieAPI'
import Loading from './Loading';


const Moviedetail = () => {
    const {loading, error, selectedMovie,addToWatchlist,removeFromWatchlist} = useContext(MovieAPI);

    if(loading){
        return (
          <Loading />
        )
    }
    if(error){
        return <div>Error: {error}</div>
    }
  
  return (
    <div className='bg-gray-800 w-[70%] h-fit rounded-lg mt-2 ml-2'>
        <h1 className='text-2xl text-blue-600 flex items-center justify-center'>Watch List</h1>
        {selectedMovie ? (
          <section className='flex flex-row'>
                <div className='flex gap-1'>
                   <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="w-40 h-fit object-cover rounded-lg" />
                
                <div >
                    <h2>{selectedMovie.Title}</h2>
                    
                   

                    <p>{selectedMovie.Plot}</p>

                    <p><strong>Director:</strong> {selectedMovie.Director}</p>

                    <p><strong>Genre:</strong> {selectedMovie.Genre}</p>

                    <p><strong>Released:</strong> {selectedMovie.Released}</p>
                </div>
                </div>
                </section>
        ) : null}

        <div className='flex flex-row gap-3 justify-end mr-3 top-2'>
        <button className='bg-green-500 rounded-lg py-2 px-3  hover:bg-green-800' onClick={()=>addToWatchlist(selectedMovie)}>save</button>
        <button className='bg-red-500 rounded py-2 px-3 hover:bg-red-800' onClick={()=>removeFromWatchlist(selectedMovie)}>delete</button>
        </div>
        
       
    </div>
  )
}

export default Moviedetail