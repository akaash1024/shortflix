import { Login } from "../component/Login";
import { useAuth } from "../context/AuthProvider";

export const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <main className=" min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.3)),url('/netflix.jpg')] bg-cover bg-center flex items-center">
      <div className="px-6 lg:px-20 max-w-3xl text-left z-10">
        {!isLoggedIn ? (
          <Login />
        ) : (
          <div>
            <h1 className="text-white text-5xl font-bold leading-tight">
              Unlimited movies,
              <br />
              TV shows and more
            </h1>
            <p className="text-white mt-4 text-lg">
              Starts at ₹149. Cancel at any time.
            </p>

            <div className="mt-6">
              <div className="h-12 w-44 bg-red-700 rounded-sm flex items-center justify-center cursor-pointer">
                <span className="text-white text-xl font-bold">
                  Finish Sign-up
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
