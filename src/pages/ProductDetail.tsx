import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/ProductDetail.css";
import { getProduct } from "../api/productApi";
import { ProductType } from "../types/product";

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
        console.log(response.data);
        setCurrentProduct(response.data);
      } catch (err) {
        console.error("Error fetching products: ", err);
      }
    };
    getCurrentProduct();
  }, []);
  return (
    // <>
    //   <PreviewImageSection
    //     src={currentProduct?.imageUrl}
    //     alt="invalid image url"
    //   />
    //   <label>Image URL</label>
    //   {currentProduct?.imageUrl}
    //   <label>Product Name</label>
    //   {currentProduct?.name}
    //   <label>Price</label>
    //   {currentProduct?.price}
    //   <label>Description</label>
    //   {currentProduct?.description}
    // </>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
