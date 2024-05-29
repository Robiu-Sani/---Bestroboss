import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages-component/Root";
import Error from "../Error/Error";
import Home from "../../pages-component/Home/Home";
import OurMenu from "../../pages-component/OurMenu/OurMenu";
import Ourshaps from "../../pages-component/Ourshaps/Ourshaps";
import ContactUs from "../../pages-component/ContactUs/ContactUs";
import Login from "../../pages-component/Authcation/Login";
import Deshboard from "../../pages-component/Deshboard/Deshboard";

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
        path: "/ourmenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/ourshop",
        element: <Ourshaps></Ourshaps>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/deshboard",
    element: <Deshboard></Deshboard>,
  },
]);

export default router;
