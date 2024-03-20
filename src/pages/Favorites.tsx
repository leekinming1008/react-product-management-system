import { styled } from "styled-components";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProduct } from "../api/productApi";
import { ProductType } from "../types/product";

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

const ProductSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-end;
  align-items: center;
  left: 50%;
`;

const Favorites = () => {
  const [favoritesProducts, setFavoritesProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchFavorites = async (id: string) => {
      if (!id) {
        console.error("Product ID is undefined");
        return; // Exit the function if id is undefined
      }
      try {
        const response = await getProduct(id);
        setFavoritesProducts((prevOrderItems) => [
          ...prevOrderItems,
          response.data.data,
        ]);
      } catch (err) {
        console.error("Error fetching products: ", err);
      }
    };
    const favoriteList = localStorage.getItem("favorite");
    const favoriteListJSON: string[] = favoriteList
      ? JSON.parse(favoriteList)
      : null;
    favoriteListJSON &&
      favoriteListJSON.forEach((productId) => {
        fetchFavorites(productId);
      });
  }, []);
  return (
    <div>
      <HomePageHeader>
        {favoritesProducts && favoritesProducts.length != 0
          ? "Here is all your favorities here :)"
          : "You don't add any favorites yet, please go to home page and add the product you like!! :))"}
      </HomePageHeader>
      <ProductSection>
        {favoritesProducts &&
          favoritesProducts.map((productItem) => (
            <ProductCard
              key={productItem._id}
              _id={productItem._id}
              image={productItem.image}
              factory={productItem.factory}
              name={productItem.name}
              price={productItem.price}
              description={productItem.description}
              airline={productItem.airline}
              year={productItem.year}
            />
          ))}
      </ProductSection>
    </div>
  );
};

export default Favorites;
