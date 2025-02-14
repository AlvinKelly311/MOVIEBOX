import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieAPI = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("avengers");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const [watchlist, setWatchlist] = useState(() => {
        const stored = localStorage.getItem("watchlist");
        const parsed = stored ? JSON.parse(stored) : [];
        // Filter out null or undefined values
        return parsed.filter(movie => movie && movie.imdbID);
    });

    const APIKEY = "26f0e5e";
    const BASE_URL = "https://www.omdbapi.com/";

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${APIKEY}`);
                const data = await response.data;

                if (data.Response === "True") {
                    setMovies(data.Search); // Set movies to the Search array
                    setError(null); // Clear previous errors
                } else {
                    setError(data.Error || "No movies found");
                }
            } catch (error) {
                console.log(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [query]);

    const handleSearch = (searchTerm) => {
        if (searchTerm.length < 3) {
            setMovies([]);
            return;
        }

        if (!searchTerm) {
            setMovies(query);
        }
        setQuery(searchTerm);
    };

    const handleMovielist = async (imdbID) => {
        if (!imdbID) {
            console.error("Invalid IMDb ID:", imdbID);
            return;
        }

        try {
            setLoading(true);
            const response = await axios.get(`${BASE_URL}?i=${imdbID}&apikey=${APIKEY}`);
            const data = await response.data;
            console.log(data);
            setSelectedMovie(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const addToWatchlist = (movie) => {
        if (!movie || !movie.imdbID) {
            console.error("Invalid movie object:", movie);
            return;
        }

        setWatchlist((prevWatchlist) => {
            // Ensure prevWatchlist is an array and filter out null values
            const validWatchlist = Array.isArray(prevWatchlist) ? prevWatchlist.filter(item => item && item.imdbID) : [];

            // Check if movie is already in the watchlist
            if (validWatchlist.some((item) => item.imdbID === movie.imdbID)) {
                console.warn("Movie already in watchlist:", movie);
                return validWatchlist;
            }

            // Add the movie to the watchlist
            const updatedWatchlist = [...validWatchlist, movie];
            localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
            return updatedWatchlist;
        });
    };

    const removeFromWatchlist = (movie) => {
        if (!movie || !movie.imdbID) {
            console.error("Invalid movie object:", movie);
            return;
        }

        setWatchlist((prevWatchlist) => {
            // Ensure prevWatchlist is an array and filter out null values
            const validWatchlist = Array.isArray(prevWatchlist) ? prevWatchlist.filter(item => item && item.imdbID) : [];

            // Remove the movie from the watchlist
            const updatedWatchlist = validWatchlist.filter((item) => item.imdbID !== movie.imdbID);
            localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
            return updatedWatchlist;
        });
    };

    return (
        <MovieAPI.Provider value={{ movies, error, loading, handleSearch, handleMovielist, selectedMovie, watchlist, addToWatchlist, removeFromWatchlist }}>
            {children}
        </MovieAPI.Provider>
    );
};

export default MovieProvider;