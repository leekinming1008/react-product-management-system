import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteProduct, getProduct } from "../api/productApi";
import { ProductType } from "../types/product";
import { PacmanLoader } from "react-spinners";
import "../css/ProductDetail.css";
import { Button } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState<ProductType>();
  const nav = useNavigate();

  const handleDeleteProduct = async () => {
    const userChooise = window.confirm("Are you sure to delect this product?");
    if (userChooise && id) {
      try {
        const response = await deleteProduct(id);
        if (response.status == 202) {
          console.log(response.data);
          nav("/");
          window.alert(
            `You have successfully delete the product ${currentProduct?.name}`
          );
        }
      } catch (err) {
        console.log("Have error during the delete process", err);
      }
    }
  };

  const haneleEditProduct = async () => {
    nav(`/editProduct/${id}`);
    window.alert("Edit function is still under development");
  };

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
    <section id="services" className="services section-bg">
      <div className="container-fluid">
        <div className="row row-sm">
          <div className="col-md-6 ">
            <div className="_product-images">
              <img src={currentProduct?.image} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="_product-detail-content">
              <p className="_p-name">
                {" "}
                {currentProduct?.factory} {currentProduct?.name}
                <div>{currentProduct?.year}</div>
              </p>
              <div className="_p-price-box">
                <div className="_p-features">
                  <span> Description About this product: </span>
                  <p>{currentProduct?.description}</p>
                </div>
                <div className="p-list">
                  <span>CAD$ {currentProduct?.price}</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Button onClick={haneleEditProduct}>Edit product</Button>
              <Button onClick={handleDeleteProduct}>Delete Product</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <PacmanLoader color="#36d7b7" size={90} />
  );
};

export default ProductDetail;
