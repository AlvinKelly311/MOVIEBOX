import React, { useContext, useState } from 'react'
import { MovieAPI } from '../ContextAPI/MovieAPI';

const Searchbar = () => {
  const {handleSearch} = useContext(MovieAPI)
  const [search, setSearch] = useState("");

  const HandleSearch = (e) => {
    const Value = e.target.value;
    setSearch(Value);
    handleSearch(Value);
  }
  return (
    <div className='flex relative flex-col'> 

        <div className='relative'>

            <input 

                type="search" 

                placeholder='Search'

                value={search}

                onChange={HandleSearch}

                className='p-3 rounded-bl-[0.5rem] rounded-tr-[0.5rem] border-[1.2px] border-current bg-gray-100 pl-10 w-full text-black' // Added padding for the icon

            />

            <img 

                src='https://cdn-icons-png.flaticon.com/128/5636/5636698.png' 

                className='absolute left-3 top-1/2 transform -translate-y-1/2 w-[30px] cursor-pointer' 

                // onClick={handleShow} // You can also use the icon to trigger the search

                alt="Search Icon"

            />
            
            </div>

            <div>
        
        </div>

    </div>
  )
}

export default Searchbar;