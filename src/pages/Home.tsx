import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productList from "../data/ProductsData.json";
import styled from "styled-components";

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
  return (
    <div>
      <HomePageHeader>Welcome to My Aircraft Store :)</HomePageHeader>
      <ProductSection>
        {productList.Products.map((productItem) => (
          <Link to={`/productDetail/${productItem.id}`}>
            <ProductCard
              key={productItem.id}
              name={productItem.name}
              price={productItem.price}
              description={productItem.description}
              imageUrl={productItem.imageUrl}
            />
          </Link>
        ))}
      </ProductSection>
    </div>
  );
};

export default Home;
