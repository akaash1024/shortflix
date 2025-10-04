import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout/AppLayout";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthProvider";
import { Home } from "./page/Home";
import { WatchList } from "./page/WatchList";
import { ErrorElement } from "./component/ErrorElement";
import { Browser } from "./page/Browser";
import { Provider } from "react-redux";
import { store } from "./store/movies.store";
import { MovieDetails } from "./page/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watchList",
        element: <WatchList />,
      },
      {
        path: "/browser",
        // element: <MovieDetails />,
        element: <Browser />,
      },
      {
        path: "/browser/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            bodyClassName="toastBody"
          />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
