import React, { useState } from 'react'
import { signUp } from '../AUTH SERVICE/Logindetails'
import { FaFilm } from "react-icons/fa";


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  
  const handleSignup = async (e) => {
    e.preventDefault()
    const { user, error } = await signUp(email, password)
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email for the confirmation link')
    }
  }
  
  return (
    <div className="relative bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9YI0uUbhaGBwZDb8kWzBoQ05LXGW5xpFJg&s')] bg-cover bg-center h-screen w-full flex flex-col gap-40 items-center">
      <div className='absolute inset-0 backdrop-brightness-10'></div>
      <div className='relative z-10 text-white p-10 flex justify-start w-full'>
        <h1 className="text-2xl font-bold p-5 flex items-center ">
          <FaFilm className="mr-2 text-red-500 font-extrabold" /> Apex.STUDIO
        </h1>
      </div>
      <div className='relative z-10 text-white text-center px-7 flex flex-col gap-5 justify-center bg-black/30 w-110 h-110 rounded-lg shadow-lg border-3 border-black'>
        <h1 className="text-2xl font-bold text-white mb-4 relative bottom-6">signUp</h1>
        <form onSubmit={handleSignup} className="flex flex-col gap-10">
          <input
            className="p-3 rounded bg-white text-black outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="p-3 rounded bg-white text-black outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-red-500 text-white p-3 rounded-lg  hover:bg-red-700 transition cursor-pointer" type="submit">
            signUp
          </button>
        </form>
        {message && <p className="mt-4 text-white">{message}</p>}
      
      </div>
  </div>
  )
}

export default Signup