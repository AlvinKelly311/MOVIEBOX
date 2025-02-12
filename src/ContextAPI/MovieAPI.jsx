import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { q } from "framer-motion/client";

 export const MovieAPI = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("avengers")
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    const [watchlist, setWatchlist] = useState(() => {
      const stored = localStorage.getItem("watchlist");
      return stored ? JSON.parse(stored) : [];
    });

    const APIKEY="26f0e5e";
    const BASE_URL = "https://www.omdbapi.com/";
    
   

    useEffect(()=>{
      const fetchMovie = async () => {
        try{
          setLoading(true);
            const response = await axios .get(`${BASE_URL}?s=${query}&apikey=${APIKEY}`);
            
            const data = await response.data
        
      if (data.Response === "True") {
        setMovies(data.Search); // Set movies to the Search array
        setError(null); // Clear previous errors
      } else {
        setError(data.Error || "No movies found");
      }
    } catch (error) {
      console.log(error)
      setError(error.message);
    } finally {
      setLoading(false);
    }
    };

    fetchMovie()
    },[query])
   
    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }
     
    
    const handleMovielist = async(imdbID) =>{
      const imbdID = imdbID;
      try{
        setLoading(true);
        const response = await axios.get(`${BASE_URL}?i=${imdbID}&apikey=${APIKEY}`);
        const data = await response.data;
        console.log(data)
        // if(!data || data.imdbID ){
        //   throw new Error(data.Error || "Missing movie imbdID");
        // }
        setSelectedMovie(data);
      }catch(error){
        setError(error.message);
      }finally{
        setLoading(false)
      }

    }

     // Function to add a movie to the watchlist
     const addToWatchlist = (movie) => {
      console.log('adding movie', movie);

      if(!movie || movie.imdbID) {
        console.error("Invalid movie object:", movie);
        return;
      };

      setWatchlist((prevWatchlist) => {
        // Optionally prevent duplicates
        if (prevWatchlist.some((item) => item.imdbID === movie.imdbID)) {
          return prevWatchlist;
        }
        const updatedWatchlist = [...prevWatchlist, movie];
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        return updatedWatchlist;
      });
    };
  
    // Function to remove a movie from the watchlist
    const removeFromWatchlist = (movie) => {
      setWatchlist((prevWatchlist) => {
        const updatedWatchlist = prevWatchlist.filter(
          (item) => item.imdbID !== movie.imdbID
        );
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        return updatedWatchlist;
      });
    };

  

return (
    <MovieAPI.Provider value={{movies,error,loading,handleSearch,handleMovielist,selectedMovie,addToWatchlist,removeFromWatchlist}}>
        {children}
    </MovieAPI.Provider>
);
};

export default MovieProvider;

