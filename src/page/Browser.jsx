import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../component/Pagination";
import { MovieCard } from "../component/MovieCard";
import { fetchMovies } from "../features/moviesSlice";
import { toast } from "react-toastify";


export const Browser = () => {
  const { setSearchTerm, searchTerm, currentPage, setCurrentPage } = useAuth();

  let { moviesList, error } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm.trim()) {
      dispatch(fetchMovies({ currentPage, searchTerm }));
    }
  }, []); 



  useEffect(() => {
    moviesList = [];
    const timer = setTimeout(() => {
      dispatch(fetchMovies({ currentPage, searchTerm }));
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, currentPage, dispatch]);

  return (
    <div className=" min-h-screen overflow-hidden bg-[#181818] p-6">
      {/* Header */}
      <div className="flex justify-between gap-12 mt-24">
        <div className="flex flex-col space-y-2">
          <h1 className="text-white text-4xl">Weekends Movies & TV</h1>
          <p className="text-white">
            Laugh, cry, sigh, scream, shout or whatever you feel like with these{" "}
            <br />
            comedies, dramas, romances, thrillers and so much more, all hailing{" "}
            <br />
            from France.
          </p>
        </div>

        <div className="mr-24 relative">
          <input
            type="search"
            value={searchTerm }
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search for movies, TV shows..."
            className="w-72 rounded-full bg-[#333] px-4 py-2 pl-10 text-white placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Movie Grid */}
      <br />
      <div className="space-y-6 mt-8">
        <h2 className="text-2xl text-white">Your Next Watch</h2>
        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
          {moviesList?.map((movie) => (
            <Link
              key={movie.imdbID}
              to={`/browser/${movie.imdbID}`}
              className="flex-shrink-0 w-48"
            >
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
};
