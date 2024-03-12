import { useParams } from "react-router-dom";
import productList from "../data/ProductsData.json";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import "../css/ProductDetail.css";

interface Product {
  id: string;
  name: string;
  price: string;
  longDescription: string;
  imageUrl: string;
}

const PreviewImageSection = styled.img`
  height: 300px;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState<Product | undefined>();
  useEffect(() => {
    productList.Products.find((product) => {
      if (product.id == id) {
        setCurrentProduct(product);
      }
    });
  });
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
              <img src={currentProduct?.imageUrl} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="_product-detail-content">
              <p className="_p-name"> {currentProduct?.name} </p>
              <div className="_p-price-box">
                <div className="p-list">
                  <span>CAD : {currentProduct?.price}</span>
                </div>
                <div className="_p-features">
                  <span> Description About this product:- </span>
                  <p>{currentProduct?.longDescription}</p>
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
