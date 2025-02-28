import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page 404
import NoFoundPage from "./page/NoFoundPage";
// page
import Home from "./page/App"
import Categorie from "./page/Categorie"
import Connexion from "./page/Connexion"
import Creation from "./page/Creation"
import MovieDetail from "./page/MovieDetail"
import SearchResult from "./page/SearchQuery";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NoFoundPage />,
    },
    {
      path: "/categorie",
      element: <Categorie />,
    },
    {
      path: "/connexion",
      element: <Connexion />,
    },
    {
      path: "/creation",
      element: <Creation />
    },
    {
      path: "/movie/:id",
      element: <MovieDetail />,
    },
    {
      path: "/search",
      element: <SearchResult />,
    },
])

function Route() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
  
  export default Route;