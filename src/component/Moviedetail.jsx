import React, { useContext } from 'react';
import { MovieAPI } from '../ContextAPI/MovieAPI';
import Loading from './Loading';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Moviedetail = () => {
    const { loading, error, selectedMovie, addToWatchlist, removeFromWatchlist } = useContext(MovieAPI);

    if (loading) return <Loading />;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Navbar />

            {/* Main Content Section with Sidebar */}
            <div className="flex flex-row mt-16 p-4">
                
                {/* Sidebar (always visible, takes 1/4 of the screen) */}
                <div className="w-1/4 lg:w-1/5 bg-gray-800 p-4 rounded-lg shadow-lg">
                    <Sidebar />
                </div>

                {/* Spacing Between Sidebar & Content */}
                <div className="w-5 md:w-8"></div>

                {/* Main Content (Takes remaining width) */}
                <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl text-blue-500 text-center font-semibold mb-4">Movie Details</h1>

                    {selectedMovie ? (
                        <section className="flex flex-col md:flex-row gap-6">
                            {/* Movie Poster */}
                            <div className="flex justify-center md:justify-start">
                                <img 
                                    src={selectedMovie.Poster} 
                                    alt={selectedMovie.Title} 
                                    className="w-full md:w-52 lg:w-60 h-auto aspect-[2/3] object-cover rounded-lg"
                                />
                            </div>

                            {/* Movie Information */}
                            <div className="flex flex-col justify-center text-center md:text-left space-y-3">
                                <h2 className="text-xl font-bold">{selectedMovie.Title}</h2>
                                <p className="text-gray-400">{selectedMovie.Plot}</p>
                                <p className="text-sm"><strong>Director:</strong> {selectedMovie.Director}</p>
                                <p className="text-sm"><strong>Genre:</strong> {selectedMovie.Genre}</p>
                                <p className="text-sm"><strong>Released:</strong> {selectedMovie.Released}</p>
                            </div>
                        </section>
                    ) : (
                        <p className="text-center text-gray-400">No movie selected.</p>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-3 mt-6 md:justify-end">
                        <button 
                            className="bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-700 transition duration-300"
                            onClick={() => {
                              if (!selectedMovie || !selectedMovie.imdbID) {
                                  console.error("No valid movie selected!");
                                  return;
                              }
                              addToWatchlist(selectedMovie);
                          }}
                        >
                            Save to Watchlist
                        </button>
                        <button 
                            className="bg-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-700 transition duration-300"
                            onClick={() => {
                              if(!selectedMovie || !selectedMovie.imdbID){
                                console.error("No valid movie selected!")
                                return;
                              }
                              removeFromWatchlist(selectedMovie);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Moviedetail;
