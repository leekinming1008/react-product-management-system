import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";

//Page
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
import Layout from "./pages/Layout";
import Favorites from "./pages/Favorites";

const browserRouter = createBrowserRouter([
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
        path: "/productDetail/:id",
        element: <ProductDetail />,
      },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>
);
