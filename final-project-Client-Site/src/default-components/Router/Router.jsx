import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages-component/Root";
import Error from "../Error/Error";
import Home from "../../pages-component/Home/Home";
import About from "../../pages-component/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
