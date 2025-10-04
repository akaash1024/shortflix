import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/moviesSlice";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storageKey = "userDB";
  const loginKey = "isLoggedIn";

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem(loginKey)) || null
  );

  const [currentPage, setCurrentPage] = useState(1);

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem(storageKey)) || []
  );

  const [searchTerm, setSearchTerm] = useState("shrek");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem(loginKey, JSON.stringify(isLoggedIn));
    } else {
      localStorage.removeItem(loginKey);
    }
  }, [isLoggedIn]);

  // 🔹 Handle URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const s = urlParams.get("s");
    const page = urlParams.get("page");

    if (s) setSearchTerm(s); //  only overwrite if URL has ?s=
    if (page) setCurrentPage(Number(page));
  }, []);

  const updateURL = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("s", searchTerm);
    if (currentPage) params.set("page", currentPage.toString());

    const queryString = params.toString();
    const newUrl = queryString ? `?${queryString}` : window.location.pathname;
    window.history.replaceState({}, "", newUrl);
  };

  const handleAddList = (movie) => {
    let temp = JSON.parse(localStorage.getItem(loginKey) || []);
    console.log(temp.email);

    const isHasWL = JSON.parse(localStorage.getItem(`${temp.email}`)) || [];

    let isAdded = isHasWL.some((m) => m.imdbID === movie.imdbID);
    if (isAdded) return toast.error("Already added");

    isHasWL.push(movie);
    localStorage.setItem(`${temp.email}`, JSON.stringify(isHasWL));
    toast.success("Added sucessfully");
  };

  useEffect(() => {
    updateURL();
  }, [searchTerm, currentPage]);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    users,
    setUsers,
    storageKey,
    setSearchTerm,
    searchTerm,
    currentPage,
    setCurrentPage,
    loginKey,
    handleAddList,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
