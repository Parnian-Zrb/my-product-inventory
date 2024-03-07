import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddProduct from "./Pages/AddProduct.tsx";
import EditProduct from "./Pages/EditProduct.tsx";
import Home from "./Pages/Home.tsx";
import { Layout } from "./components/Layout.tsx";
import Favorites from "./Pages/Favorites.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },

      {
        path: "/EditProduct",
        element: <EditProduct />,
      },
      {
        path: "/Favorites",
        element: <Favorites />,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/signup",
    element: <div>Sign Up</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
