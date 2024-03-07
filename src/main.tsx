import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AddProduct from "./Pages/AddProduct.tsx";
import createBrowserRouter from "./Pages/createBrowserRouter.tsx";
import EditProduct from "./Pages/EditProduct.tsx";
import Home from "./Pages/Home.tsx";
import RouterProvider from "./Pages/RouterProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode></React.StrictMode>
);
