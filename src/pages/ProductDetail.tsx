import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteProdct, getProduct } from "../api/productApi";
import { ProductType } from "../types/product";
import { PacmanLoader } from "react-spinners";
import "../css/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState<ProductType>();
  const handleDeleteProdct = async () => {
    const userChooise = window.confirm("Are you sure to delect this product?");
    if (userChooise && id) {
      try {
        const response = await deleteProdct(id);
        if (response.status == 200) {
          document.location.href = "/";
          window.alert(
            `You have successfully delete the product ${currentProduct?.title}`
          );
        }
      } catch (err) {
        console.log("Have error during the delete process", err);
      }
    }
  };
  useEffect(() => {
    const getCurrentProduct = async () => {
      if (!id) {
        console.error("Product ID is undefined");
        return; // Exit the function if id is undefined
      }
      try {
        const response = await getProduct(id);
        setCurrentProduct(response.data);
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
              <p className="_p-name"> {currentProduct?.title} </p>
              <div className="_p-price-box">
                <div className="p-list">
                  <span>CAD : {currentProduct?.price}</span>
                </div>
                <div className="_p-features">
                  <span> Description About this product:- </span>
                  <p>{currentProduct?.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <button>Edit product</button>
              <button onClick={handleDeleteProdct}>Delete Product</button>
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
