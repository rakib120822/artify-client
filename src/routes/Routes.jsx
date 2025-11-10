import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Errorpage from "../pages/errorPage/Errorpage";
import ExploreArtworks from "../pages/explorePage/ExploreArtworks";
import Gallery from "../pages/gallaryPage/Gallery";
import Favorite from "../pages/favoritePage/Favorite";
import AddArtwork from "../pages/addArtworkPage/AddArtwork";

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
        element: <AddArtwork />,
      },
      {
        path: "/my-gallery",
        element: <Gallery />,
      },
      {
        path: "/all-artworks",
        element: <ExploreArtworks />,
      },
      {
        path: "/my-favorites",
        element: <Favorite />,
      },
    ],
  },
  {
    path: "/*",
    element: <Errorpage />,
  },
]);

export default router;
