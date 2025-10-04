import { act, useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { WatchListCard } from "../component/WatchListCard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const WatchList = () => {
  const { loginKey } = useAuth();
  const navigate = useNavigate();
  const activeUser = JSON.parse(localStorage.getItem(loginKey));

  useEffect(() => {
    if (!activeUser) {
      toast.error("Login First");
      navigate("/");
    }
  }, [activeUser, navigate]);

  if (!activeUser) return null; 

  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem(`${activeUser.email}`)) || []
  );

  const handleRemove = (id) => {
    const updatedList = watchlist.filter((movie) => movie.imdbID !== id);
    setWatchlist(updatedList);
    localStorage.setItem(`${activeUser.email}`, JSON.stringify(updatedList));
  };

  if (watchlist.length === 0)
    return (
      <h1 className=" mt-24 mb-24 font-extralight text-5xl">
        No Watchlist found..
      </h1>
    );

  return (
    <div className="min-h-screen overflow-hidden bg-[#181818] p-6">
      <div className="flex justify-between gap-12 mt-24">
        <h1 className="text-white text-4xl">Watchlist</h1>
      </div>

      <div className="space-y-6 mt-8">
        <h2 className="text-2xl text-white">Your Next Watch</h2>
        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
          {watchlist.map((movie) => (
            <div key={movie.imdbID} className="flex-shrink-0 w-48">
              <WatchListCard movie={movie} removeBtn={handleRemove} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
