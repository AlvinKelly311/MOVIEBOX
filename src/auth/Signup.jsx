import React, { useState } from 'react'
import { signUp } from '../AUTH SERVICE/Logindetails'

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
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-96 text-center">
      <h1 className="text-2xl font-bold text-white mb-4">signUp</h1>
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
        <button className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-700 transition" type="submit">
          signUp
        </button>
      </form>
      {message && <p className="mt-4 text-white">{message}</p>}
     
    </div>
  </div>
  )
}

export default Signup