import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";

//Page
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
import Layout from "./pages/Layout";
import Favorites from "./pages/Favorites";
import ErrorPage from "./pages/Errorpage";
import EditProduct from "./pages/EditProduct";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
      { path: "/editProduct/:id", element: <EditProduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={browserRouter} />
  </>
);
