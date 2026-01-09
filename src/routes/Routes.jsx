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
import UpdateArtWork from "../pages/updateArtwork/UpdateArtWork";
import ContactPage from "../pages/contactPage/ContactPage";
import Dashboard from "../layout/Dashboard";
import ApprovedArtwork from "../pages/approved-artworkPage/ApprovedArtWorkPage";
import Approved from "../pages/isApproved/Approved";
import DashboardHome from "../pages/dashboardPage/DashboardLanding";

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
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateArtWork />
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
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-artwork",
        element: <AddArtwork />,
      },
      {
        path: "my-gallery",
        element: <Gallery />,
      },
      {
        path: "my-gallery",
        element: <Gallery />,
      },
      {
        path: "approved-artworks",
        element: <ApprovedArtwork />,
      },
      {
        path: "manage-artworks",
        element: <Approved />,
      },

      {
        path: "update/profile",
        element: <UpdateProfile />,
      },
    ],
  },

  {
    path: "/*",
    element: <Errorpage />,
  },
]);

export default router;
