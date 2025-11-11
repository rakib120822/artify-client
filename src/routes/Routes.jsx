import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Errorpage from "../pages/errorPage/Errorpage";
import ExploreArtworks from "../pages/explorePage/ExploreArtworks";
import Gallery from "../pages/gallaryPage/Gallery";
import Favorite from "../pages/favoritePage/Favorite";
import AddArtwork from "../pages/addArtworkPage/AddArtwork";
import DetailsPage from "../pages/detailsPage/DetailsPage";
import PrivateRoutes from "../pages/privateroutes/PrivateRoutes";
import Register from "../pages/authPages/Register";
import Login from "../pages/authPages/Login";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-artwork",
        element: (
          <PrivateRoutes>
            <AddArtwork />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update/profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-gallery",
        element: (
          <PrivateRoutes>
            <Gallery />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-artworks",
        element: <ExploreArtworks />,
      },
      {
        path: "/my-favorites",
        element: (
          <PrivateRoutes>
            <Favorite />
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <DetailsPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/*",
    element: <Errorpage />,
  },
]);

export default router;
