import { deleteProduct } from "../api/productApi";
import "../css/ProductDetail.css";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetailTable = ({ currentProduct }: any) => {
  const nav = useNavigate();
  const { id } = useParams();
  const haneleEditProduct = async () => {
    nav(`/editProduct/${id}`);
  };

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

  return (
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
                {" - "}
                {currentProduct?.airline}
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
  );
};

export default ProductDetailTable;
