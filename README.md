Apex.STUDIO - Movie Streaming App
Apex.STUDIO is a movie streaming application that allows users to browse, search, and watch their favorite movies. It includes features like a watchlist, movie details, and a responsive design for both desktop and mobile devices. The app also supports user authentication for personalized experiences.

Features
Browse Movies: Search and browse movies using the OMDB API.

Watchlist: Add and remove movies from your watchlist.

Movie Details: View detailed information about each movie, including the title, plot, director, genre, and release date.

Responsive Design: Works seamlessly on both desktop and mobile devices.

Authentication:

Sign Up: Create a new account.

Login: Log in to your account.

Logout: Log out of your account.

Get Current User: Retrieve the currently logged-in user.

Technologies Used
Frontend: React, Vite, Tailwind CSS

State Management: React Context API, Zustand

API: OMDB API (for movie data), Supabase (for authentication)

Icons: React Icons

Routing: React Router DOM

Installation
Clone the Repository:

bash
Copy
git clone https://github.com/Valentine231/MOVIEBOX.git
cd apex-studio
Install Dependencies:

bash
Copy
npm install
Set Up Environment Variables:

Create a .env file in the root directory.

Add your OMDB API key and Supabase credentials:

plaintext
Copy
VITE_OMDB_API_KEY=your-omdb-api-key
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_KEY=your-supabase-key
Run the Development Server:

bash
Copy
npm run dev
Open the App:
Visit http://localhost:5173 in your browser.

Usage
Home Page:

Browse trending movies.

Search for movies using the search bar.

Movie Details:

Click on a movie to view its details.

Add or remove movies from your watchlist.

Watchlist:

Access your watchlist from the sidebar.

Manage your saved movies.

Authentication:

Sign Up: Create a new account using your email and password.

Login: Log in to your account using your credentials.

Logout: Log out of your account.

Get Current User: Retrieve the currently logged-in user. not yet implemented

Known Issues
No Streaming or Download Functionality:

The app currently does not support streaming or downloading movies due to limitations of the OMDB API. The OMDB API only provides metadata about movies (e.g., title, poster, plot) and does not include streaming links or downloadable content.

To add streaming or download functionality, you would need to integrate a third-party API or service that provides access to movie files or streaming links.

Limited Movie Data:

The OMDB API has a limited dataset and may not include all movies or detailed information for some entries.

Folder Structure
Copy
apex-studio/
├── src/
│   ├── components/          # Reusable components (e.g., Navbar, Sidebar)
│   ├── ContextAPI/          # Context API for state management
│   ├── pages/               # Main pages (e.g., Home, MovieDetails)
│   ├── supabase/            # Supabase client and authentication utilities
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point
├── .env                     # Environment variables
├── .gitignore               # Files to ignore in Git
├── package.json             # Project dependencies
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration
Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/your-feature).

Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
OMDB API for providing movie data.

Supabase for authentication and backend services.

React Icons for icons.

Tailwind CSS for styling.

