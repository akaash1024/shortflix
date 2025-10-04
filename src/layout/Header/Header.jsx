import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(null);
    navigate("/");
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <nav
        className={`flex items-center justify-between px-6 py-4 ${
          isHome ? "" : "bg-black text-white"
        }`}
      >
        <div className="flex items-center">
          <Link to="/">
            <span className="text-5xl text-red-600 font-bold">ShortFlix</span>
          </Link>
        </div>

        <div className="flex gap-6">
          <NavLink to="/watchList">
            <div className="  rounded-sm flex items-center justify-center cursor-pointer p-1">
              <button className="text-white hover:text-red-500 transition-colors">
                Watchlist
              </button>
            </div>
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/browser">
                <div className="  rounded-sm flex items-center justify-center cursor-pointer p-1">
                  <button className="text-white hover:text-red-500 transition-colors">
                    Browser
                  </button>
                </div>
              </NavLink>
              <div className=" bg-red-700 rounded-sm flex items-center justify-center cursor-pointer p-1">
                <button
                  className="text-white hover:text-red-500 transition-colors"
                  onClick={handleLogout}
                >
                  Sign out
                </button>
              </div>
            </>
          ) : (
            <div className=" bg-red-700 rounded-sm flex items-center justify-center cursor-pointer p-1">
              <button className="text-white hover:text-red-500 transition-colors">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
