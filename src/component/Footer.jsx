import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">MovieVerse</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Your gateway to endless entertainment.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Trending
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Genres
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition text-xl"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition text-xl"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} MovieVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
