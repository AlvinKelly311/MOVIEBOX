import React, { useState } from 'react';
import { login } from '../AUTH SERVICE/Logindetails';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { FaFilm } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, error } = await login(email, password);
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Login Successful');
    }
   navigate('/home');

  };

  return (

    <div className='bg-black'>
      <div className="relative bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9YI0uUbhaGBwZDb8kWzBoQ05LXGW5xpFJg&s')] bg-cover bg-center h-screen w-full flex flex-col gap-40 items-center">
      <div className='absolute inset-0 backdrop-brightness-10'></div>
        <div className='relative z-10 text-white p-10 flex justify-start w-full'>
          <h1 className="text-2xl font-bold p-5 flex items-center ">
            <FaFilm className="mr-2 text-red-500 font-extrabold" /> Apex.STUDIO
          </h1>
        </div>

        <div className='relative z-10 text-white text-center px-7 flex flex-col gap-5 justify-center bg-black/30 w-110 h-110 rounded-lg shadow-lg border-3 border-black'>
         
          <div className="p-8 rounded-lg shadow-lg w-96 text-center justify-center">
            <h1 className="text-2xl font-bold text-white mb-4 relative bottom-6">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-10">
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
              <button className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-700 transition cursor-pointer" type="submit">
                Login
              </button>
            </form>
            {message && <p className="mt-4 text-white">{message}</p>}
            <Link to="/signup" className="block mt-4 text-white underline">
              Don't have an account? Sign up
            </Link>
          </div> 
            
        </div>

        

      </div>

      <div className='relative z-10 text-white text-center px-7 flex flex-row gap-5 justify-between items-center bg-black/80 w-full h-full  shadow-lg bottom-7 cursor-pointer'>
        <div className='flex flex-col m-8 gap-7 relative top-7 cursor-pointer'>
          <p>Questions? Contact us.</p>
          <p>FAQ</p>
          <p>Cookie Preferences</p>
        </div>

        <div className='flex flex-col m-8 gap-7 relative top-7 cursor-pointer'>
          <p>Help Center</p>
          <p>Corporate Information</p>
        </div>

        <div className='flex flex-col m-8 gap-7 relative top-7 cursor-pointer'>
          <p>Terms of Use</p>
        </div>

        <div className='flex flex-col m-8 gap-7 relative top-7 cursor-pointer'>
          <p>
          Privacy
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
