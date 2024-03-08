import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      Home Page
      <ProductCard
        name={"This is the demo product"}
        price={50}
        description={"This is the description"}
        imageUrl={
          "https://www.airbus.com/sites/g/files/jlcbta136/files/styles/airbus_1920x1920/public/2021-11/A380-family-stage.webp?itok=Sfh20Vsk"
        }
      />
    </div>
  );
};

export default Home;
