import axios from "axios";
import { ProductObjectType } from "../types/Product.o";

// GET all products
const getAllProducts = () => axios.get("https://fakestoreapi.com/products");

const getProduct = (id: string) =>
  axios.get(`https://fakestoreapi.com/products/${id}`);

const createProduct = (newItem: ProductObjectType) =>
  axios.post("https://fakestoreapi.com/products", { newItem });

export { getAllProducts, getProduct, createProduct };
