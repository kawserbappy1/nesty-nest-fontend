import { createBrowserRouter } from "react-router";
import RooteLayout from "../layouts/RooteLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import BookTable from "../pages/BookTable";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RooteLayout></RooteLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "book-table",
        element: <BookTable></BookTable>,
      },
      {
        path: "sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
