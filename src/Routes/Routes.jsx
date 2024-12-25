import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
// import NotFound from "../Pages/NotFound";

import SignUp from "../Pages/SignUp";
import Main from "../Layout/Main";
import Shop from "../Pages/Shop";
import Order from "../Pages/Order";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/secret/Secret";
import Category from "../Pages/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
