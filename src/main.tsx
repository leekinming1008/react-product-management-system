import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Page
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

const browserRouter = createBrowserRouter([{
  path: "/",
  element: <Navbar />,
  children:[{
    path: "/",
    element: <Home />,
  },{
    path: "/addProduct",
    element: <AddProduct />
  },{
    path: "/editProduct/:id",
    element: <EditProduct />
  }]
}]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={browserRouter}>
  </StrictMode>
);
