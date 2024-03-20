import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../api/productApi";
import { ProductType } from "../types/product";
import ProductDetailTable from "../components/ProductDetailTable";
import "../css/ProductDetail.css";
import { PacmanLoader } from "react-spinners";

const ProductDetail = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState<ProductType>();

  useEffect(() => {
    const getCurrentProduct = async () => {
      if (!id) {
        console.error("Product ID is undefined");
        return; // Exit the function if id is undefined
      }
      try {
        const response = await getProduct(id);
        console.log(response);
        setCurrentProduct(response.data.data);
      } catch (err) {
        console.error("Error fetching products: ", err);
      }
    };
    getCurrentProduct();
  }, []);
  return currentProduct ? (
    <ProductDetailTable currentProduct={currentProduct} />
  ) : (
    <PacmanLoader color="#36d7b7" size={90} />
  );
};

export default ProductDetail;
