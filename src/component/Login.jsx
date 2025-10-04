import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { users, storageKey, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;

    let getDB = JSON.parse(localStorage.getItem(storageKey)) || [];

    
    let isValidUser = getDB.some(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    
    if (!isValidUser) {
      getDB.push(formData);
      localStorage.setItem(storageKey, JSON.stringify(getDB));
    }

    toast.success("Login Successful");
    setIsLoggedIn(formData);
    navigate("/browser"); 
  };

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="h-[22rem] w-96 bg-[rgba(4,2,1,0.8)] rounded-md shadow-lg flex items-center justify-center">
      <div className="px-6 py-6 w-full">
        <h1 className="text-white text-3xl mb-6 font-semibold">Sign-In</h1>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div className="flex flex-col border border-gray-600 rounded-md p-2">
            <label className="text-white mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" px-2 bg-transparent text-white outline-none placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 rounded-sm"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleFormDataChange}
            />
          </div>

          <div className="flex flex-col border border-gray-600 rounded-md p-2">
            <label className="text-white mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="px-2 bg-transparent text-white outline-none placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 rounded-sm"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleFormDataChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};
