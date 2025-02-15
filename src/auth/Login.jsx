import React, { useState } from "react";
import { login } from "../AUTH SERVICE/Logindetails";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, error } = await login(email, password);
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Login Successful");
      navigate("/home");
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Background Section */}
      <div className="relative bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9YI0uUbhaGBwZDb8kWzBoQ05LXGW5xpFJg&s')] bg-cover bg-center h-screen w-full flex flex-col items-center justify-center p-4">
        <div className="absolute inset-0 backdrop-brightness-50"></div>

        {/* Header */}
        <div className="relative z-10 text-white p-5 w-full text-center md:text-left">
          <h1 className="text-2xl font-bold flex items-center justify-center ">
            <FaFilm className="mr-2 text-red-500 font-extrabold" /> Apex.STUDIO
          </h1>
        </div>

        {/* Login Form */}
        <div className="relative z-10 bg-black/70 p-6 md:p-10 rounded-lg shadow-lg text-white w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              className="p-3 rounded bg-white text-black outline-none w-full"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="p-3 rounded bg-white text-black outline-none w-full"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-700 transition w-full" type="submit">
              Login
            </button>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
          <Link to="/signup" className="block mt-4 text-center text-white underline">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-white text-center p-5 bg-black/80 flex flex-col md:flex-row gap-5 justify-between items-center w-full">
        <div className="flex flex-col gap-3">
          <p>Questions? Contact us.</p>
          <p>FAQ</p>
          <p>Cookie Preferences</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Help Center</p>
          <p>Corporate Information</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Terms of Use</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
