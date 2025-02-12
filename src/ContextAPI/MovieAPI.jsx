import { createContext, useEffect, useState } from "react";

 export const MovieAPI = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("avengers")
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(false)

    const APIKEY="26f0e5e";
    const BASE_URL = "https://www.omdbapi.com/";

   

    useEffect(()=>{
      const fetchMovie = async () => {
        try{
          setLoading(true);
            const response = await fetch(`${BASE_URL}?s=${query}&apikey=${APIKEY}`);
            
            const data = await response.json();
        
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

  

    // const handleerror = async (error) => {
    //   if (error.response) {
    //     return `Error: ${error.response.status} - ${error.response.statusText}`;
    //   } else if (error.request) {
    //     return "Error: No response from server. Please check your network.";
    //   } else {
    //     return `Error: ${error.message}`;
    //   }
    // }

return (
    <MovieAPI.Provider value={{movies,error,loading}}>
        {children}
    </MovieAPI.Provider>
);
};

export default MovieProvider;