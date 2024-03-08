import ProductCard from "../components/ProductCard";
import productList from "../data/ProductsData.json";

const Home = () => {
  return (
    <div>
      Home Page
      {productList.Products.map((productItem) => (
        <ProductCard
          name={productItem.name}
          price={productItem.price}
          description={productItem.description}
          imageUrl={productItem.imageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
