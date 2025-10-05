# ShortFlix - Movie Library

A modern movie browsing application that allows users to discover movies and manage a personal watchlist. Built with React and Vite, integrated with the OMDb (Open Movie Database) API.

## 🎬 Project Overview

ShortFlix is a movie library application that enables users to explore movies, search for specific titles, and curate their own watchlist. The app demonstrates proficient use of external APIs, client-side data persistence, and modern React development practices.

## ✨ Features

### Core Features
- **Movie Search**: Real-time search functionality to find movies by title
- **Watchlist Management**: Add movies to your personal watchlist with one click
- **Persistent Storage**: Watchlist data persists across sessions using localStorage
- **Dedicated Watchlist View**: Separate page to view all saved movies

### Bonus Features
- **Remove from Watchlist**: Easy removal of movies from your watchlist
- **Client-Side Routing**: Seamless navigation between Home and Watchlist views
- **State Management**: Centralized state management with Redux Toolkit
- **Reusable Components**: Modular MovieCard component for consistent UI
- **Pagination**: Navigate through multiple pages of search results

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Language**: JavaScript
- **Routing**: React Router DOM (for client-side routing)
- **State Management**: Redux Toolkit
- **API**: OMDb (Open Movie Database) API
- **Storage**: localStorage for client-side persistence
- **Styling**: Tailwind CSS

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/akaash1024/shortflix.git
cd shortflix
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
VITE_OMDB_KEY=your_api_key_here
```

Get your free API key from [OMDb API](http://www.omdbapi.com/apikey.aspx)

### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 📦 Build for Production

Create an optimized production build:
```bash
npm run build
# or
yarn build
```

Preview the production build locally:
```bash
npm run preview
# or
yarn preview
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |


## 📁 Project Structure

```
FOLDERS-SHOWFLIX/
├── src/
│   ├── api/                 # API configuration and calls
│   ├── assets/              # Static assets (images, icons)
│   ├── component/           # React components
│   │   ├── ErrorElement.jsx
│   │   ├── Login.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Pagination.jsx
│   │   └── WatchListCard.jsx
│   ├── context/             # React Context for authentication
│   │   └── AuthProvider.jsx
│   ├── features/            # Redux slices
│   │   └── moviesSlice.js   # Movies state management
│   ├── layout/              # Layout components
│   │   ├── AppLayout.jsx
│   │   ├── Footer.jsx
│   │   └── Header/
│   │       └── Header.jsx
│   ├── page/                # Page components
│   │   ├── Browser.jsx      # Browse movies page
│   │   ├── Home.jsx         # Home page
│   │   ├── MovieDetails.jsx # Individual movie details
│   │   └── WatchList.jsx    # Watchlist page
│   ├── store/               # Redux store configuration
│   ├── App.css
│   ├── App.jsx              # Main App component
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── .env                     # Environment variables (not committed)
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Key Features Explained

### 1. Movie Fetching & Display
- Fetches movies from OMDb API based on search queries
- Displays movies in a responsive grid layout
- Each movie shows poster image, title, and year
- Handles loading and error states gracefully

### 2. Search Functionality
- Real-time search as user types
- Fetches results from OMDb API
- Displays search results instantly
- Pagination support for multiple results

### 3. Watchlist Management
- Add/remove movies with single click
- Visual indicator for movies already in watchlist
- Data persists using localStorage
- Watchlist count badge in navigation
- Managed through Redux Toolkit for predictable state updates

### 4. Client-Side Routing
- Smooth navigation without page reloads
- Routes:
  - `/` - Home page with movie search
  - `/browser` - Browse movies
  - `/movie/:id` - Movie details page
  - `/watchlist` - User's saved movies

### 5. State Management with Redux Toolkit
- **Centralized Store**: Single source of truth for application state
- **Slices**: Modular state management with `moviesSlice.js`
- **Reducers**: Pure functions for state updates
- **Actions**: Dispatched actions for adding/removing from watchlist
- **Persistence**: localStorage integration for watchlist data
- **DevTools**: Redux DevTools support for debugging

## 🔑 API Information

This project uses the **OMDb API** (Open Movie Database):
- Free tier: 1,000 daily requests
- No authentication required beyond API key
- Returns movie data including title, year, poster, plot, ratings, and more

**API Endpoint**: `https://www.omdbapi.com/`

**Query Parameters**:
- `apikey`: Your API key
- `s`: Search query (movie title)
- `type`: Content type (movies, series, episodes)
- `page`: Page number for pagination
- `i`: IMDb ID for specific movie details


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OMDb API](http://www.omdbapi.com/) for providing movie data
- [React](https://react.dev/) for the awesome framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities

---

**Made with ❤️ by Akash**
