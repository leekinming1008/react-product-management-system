import axios from "axios";

// GET all products
const getAllProducts = () => axios.get("https://fakestoreapi.com/products");

const getProduct = (id: string) =>
  axios.get(`https://fakestoreapi.com/products/${id}`);

export { getAllProducts, getProduct };
