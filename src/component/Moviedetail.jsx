import React, { useContext, useState, useEffect } from 'react';
import { MovieAPI } from '../ContextAPI/MovieAPI';
import Loading from './Loading';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Moviedetail = () => {
    const { loading, error, selectedMovie } = useContext(MovieAPI);

    // Load watchlist from localStorage when component mounts
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("watchlist");
        if (stored) {
            setWatchlist(JSON.parse(stored)); // Load from localStorage
        }
    }, []); // Runs only once when the component mounts

    // 🔄 Update localStorage whenever watchlist changes
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);

    console.log("Current Watchlist:", watchlist);

    const addToWatchlist = (movie) => {
        if (!movie || !movie.imdbID) {
            console.error("Invalid movie object:", movie);
            return;
        }

        setWatchlist((prevWatchlist) => {
            if (prevWatchlist.some((item) => item.imdbID === movie.imdbID)) {
                console.warn("Movie already in watchlist:", movie);
                return prevWatchlist;
            }
            return [...prevWatchlist, movie];
        });
    };

    const removeFromWatchlist = (movie) => {
        if (!movie || !movie.imdbID) {
            console.error("Invalid movie object:", movie);
            return;
        }

        setWatchlist((prevWatchlist) => prevWatchlist.filter((item) => item.imdbID !== movie.imdbID));
    };

    if (loading) return <Loading />;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Navbar />

            <div className="flex flex-col md:flex-row mt-16 p-4 gap-6">
                <div className="w-full md:w-1/4 lg:w-1/5 bg-gray-800 p-4 rounded-lg shadow-lg">
                    <Sidebar />
                </div>

                <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl text-blue-500 text-center font-semibold mb-4">Movie Details</h1>

                    {selectedMovie ? (
                        <section className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex justify-center md:justify-start">
                                <img 
                                    src={selectedMovie.Poster} 
                                    alt={selectedMovie.Title} 
                                    className="w-full sm:w-60 md:w-52 lg:w-60 h-auto aspect-[2/3] object-cover rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col text-center md:text-left space-y-3">
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

                    <div className="flex flex-col md:flex-row gap-3 mt-6 md:justify-end">
                        <button 
                            className="bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-700 transition duration-300"
                            onClick={() => addToWatchlist(selectedMovie)}
                        >
                            Save to Watchlist
                        </button>
                        {/* <button 
                            className="bg-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-700 transition duration-300"
                            onClick={() => removeFromWatchlist(selectedMovie)}
                        >
                            Remove
                        </button> */}
                    </div>

                    {/* Display Watchlist */}
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold mb-3">My Watchlist:</h2>
                        <ul>
                            {watchlist.length > 0 ? (
                                watchlist.map((movie) => (
                                    <li key={movie.imdbID} className="bg-gray-700 p-2 rounded-md flex justify-between items-center mb-2">
                                        <span>{movie.Title}</span>
                                        <button
                                            onClick={() => removeFromWatchlist(movie)}
                                            className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-800"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-400">No movies in your watchlist.</p>
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Moviedetail;
