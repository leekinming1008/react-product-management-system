import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import { ProductType } from "../types/product";

const ProductSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-end;
  align-items: center;
  left: 50%;
`;

const HomePageHeader = styled.h1`
  text-align: center;
  font-size: 41px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  background: -webkit-linear-gradient(
    right,
    #56d8e4,
    #9f01ea,
    #56d8e4,
    #9f01ea
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  // use Effect will call if the component is update
  // for dependance, it can tell when to run the use effect when the dependance updated
  useEffect(() => {
    const fatchProducts = async () => {
      try {
        const response = await getAllProducts();
        console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products: ", err);
      }
    };
    fatchProducts();
  }, []);
  return (
    <div>
      <HomePageHeader>Welcome to My Store :)</HomePageHeader>
      <ProductSection>
        {products.map((productItem) => (
          <ProductCard
            key={productItem.id}
            id={productItem.id}
            title={productItem.title}
            price={productItem.price}
            description={productItem.description}
            image={productItem.image}
            category={productItem.category}
            rating={productItem.rating}
          />
        ))}
      </ProductSection>
    </div>
  );
};

export default Home;
