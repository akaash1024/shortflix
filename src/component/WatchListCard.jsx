import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const WatchListCard = ({ movie, removeBtn }) => {
  const { searchTerm, currentPage } = useAuth();


  return (
    <div className="relative h-72 rounded-md overflow-hidden group cursor-pointer">
      {/* Poster */}
      <div className="h-full w-full">
        <Link
          to={`/browser/${movie.imdbID}?s=${searchTerm}&page=${currentPage}`}
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-20"
          />
        </Link>
      </div>

      {/* Hidden details (show on hover) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-3 py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h1 className=" text-sm font-semibold truncate">{movie.Title}</h1>
        <div className="flex gap-2">
          <button className="mt-2 px-3 py-1 bg-red-600 rounded text-xs hover:bg-red-700">
            Stream Now.
          </button>

          <button
            onClick={() => removeBtn(movie.imdbID)}
            className="mt-2 px-3 py-1 bg-red-600 rounded text-xs hover:bg-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
