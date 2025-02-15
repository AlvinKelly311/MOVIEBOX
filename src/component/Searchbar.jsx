import React, { useContext, useState } from 'react';
import { MovieAPI } from '../ContextAPI/MovieAPI';

const Searchbar = () => {
  const { handleSearch } = useContext(MovieAPI);
  const [search, setSearch] = useState("");

  const HandleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
  };

  return (
    <div className="relative w-full sm:w-80 mx-auto"> 
      {/* Search Input */}
      <input
        type="search"
        placeholder="Search movies..."
        value={search}
        onChange={HandleSearch}
        className="p-3 pl-12 rounded-lg border-[1.2px] border-gray-400 bg-gray-100 
                  w-full text-black focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Search Icon */}
      <img
        src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 cursor-pointer"
        alt="Search Icon"
      />
    </div>
  );
};

export default Searchbar;
