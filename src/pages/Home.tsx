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

const Home = () => {
  return (
    <div>
      Home Page
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
