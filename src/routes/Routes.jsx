import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Errorpage from "../pages/errorPage/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/*",
    element: <Errorpage />,
  },
]);

export default router
