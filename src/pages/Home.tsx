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
  font-family: Intro;
  font-size: 48px;
  background: -webkit-linear-gradient(
    -91deg,
    #eef85b 5%,
    #7aec8d 53%,
    #09e5c3 91%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 58px;
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      <HomePageHeader>Welcome to My Aircraft Store :)</HomePageHeader>
      <ProductSection>
        {productList.Products.map((productItem) => (
          <ProductCard
            name={productItem.name}
            price={productItem.price}
            description={productItem.description}
            imageUrl={productItem.imageUrl}
          />
        ))}
      </ProductSection>
    </div>
  );
};

export default Home;
