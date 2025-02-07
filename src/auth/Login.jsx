import React, { useState } from 'react';
import { login } from '../AUTH SERVICE/Logindetails';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
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
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-blue-600 p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Login</h1>
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
          <button className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-700 transition" type="submit">
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-white">{message}</p>}
        <Link to="/signup" className="block mt-4 text-white underline">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
