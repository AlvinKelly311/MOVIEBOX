import React from 'react'

const Watch = () => {
  return (
    <div>
        <div className='relative text-black p-8 flex flex-col gap-8'>
        <h3 className='text-red-600 font-extrabold text-2xl'>Continue Watching</h3>
        <div className=' flex flex-col gap-10 justify-between md:flex-row '>
          <img src="https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg" alt="Spiderman"  className='w-18 h-fit'/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTky1XNG-ZvEVpPSN1wFi0FFJ6EBEwD4F-GvQ&s" alt="Wonder-Woman" className='w-18 h-fit' />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOSmAJ70SPaOcElmRpN4LCu4SCEXNfwqktQ&s" alt="Mortal Engines" className='w-18 h-fit'/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbX0nGeYYDN2Q7VJZPW30tYIMyB7Sh05bKcw&s" alt="Rampage" className='w-18 h-fit' />
            
        </div>
      </div>
    </div>
  )
}

export default Watch