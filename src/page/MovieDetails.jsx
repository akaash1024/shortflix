import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../features/moviesSlice";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";

export const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { getMovieById, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

  const { handleAddList } = useAuth();
  

  if (loading) return <p className="text-white p-6">Loading...</p>;
  if (error) return <p className="text-red-500 p-6">{error}</p>;
  if (!getMovieById) return null;

  const movie = getMovieById;
  // const movie = {
  //   Title: "Shrek",
  //   Year: "2001",
  //   Rated: "PG",
  //   Released: "18 May 2001",
  //   Runtime: "90 min",
  //   Genre: "Animation, Adventure, Comedy",
  //   Director: "Andrew Adamson, Vicky Jenson",
  //   Writer: "William Steig, Ted Elliott, Terry Rossio",
  //   Actors: "Mike Myers, Eddie Murphy, Cameron Diaz",
  //   Plot: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
  //   Language: "English",
  //   Country: "United States",
  //   Awards: "Won 1 Oscar. 40 wins & 60 nominations total",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_SX300.jpg",
  //   Ratings: [
  //     {
  //       Source: "Internet Movie Database",
  //       Value: "7.9/10",
  //     },
  //     {
  //       Source: "Rotten Tomatoes",
  //       Value: "88%",
  //     },
  //     {
  //       Source: "Metacritic",
  //       Value: "84/100",
  //     },
  //   ],
  //   Metascore: "84",
  //   imdbRating: "7.9",
  //   imdbVotes: "786,695",
  //   imdbID: "tt0126029",
  //   Type: "movie",
  //   DVD: "N/A",
  //   BoxOffice: "$268,698,241",
  //   Production: "N/A",
  //   Website: "N/A",
  //   Response: "True",
  // };

  return (
    <div className="min-h-screen bg-[#181818] text-white p-6">
      {/* Layout: Poster + Details */}
      <div className="flex flex-col md:flex-row gap-12 mt-24">
        {/* Poster */}
        <div className="flex-shrink-0">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="rounded-2xl shadow-lg w-72 md:w-96"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold">
            {movie.Title} ({movie.Year})
          </h1>
          <p className="text-gray-300 italic">{movie.Plot}</p>

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-semibold">Genre:</span> {movie.Genre}
            </p>
            <p>
              <span className="font-semibold">Director:</span> {movie.Director}
            </p>
            <p>
              <span className="font-semibold">Actors:</span> {movie.Actors}
            </p>
            <p>
              <span className="font-semibold">Language:</span> {movie.Language}
            </p>
            <p>
              <span className="font-semibold">Awards:</span> {movie.Awards}
            </p>
          </div>

          {/* Ratings */}
          <div className="flex gap-6 mt-4">
            {movie.Ratings?.map((rating, i) => (
              <div key={i} className="bg-[#222] px-4 py-2 rounded-lg shadow-md">
                <p className="text-sm">{rating.Source}</p>
                <p className="font-bold">{rating.Value}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg shadow-md">
              Play
            </button>
            <button
              onClick={() => handleAddList(movie)}
              className="bg-[#333] hover:bg-[#444] px-6 py-2 rounded-lg shadow-md"
            >
              + My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
