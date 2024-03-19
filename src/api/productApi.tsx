import axios from "axios";
import { ProductObjectType } from "../types/Product.o";

const productUrl = import.meta.env.VITE_BASE_URL;

// GET all products
const getAllProducts = () => axios.get(productUrl);

// GET a particular product
const getProduct = (id: string) => axios.get(`${productUrl}/${id}`);

// POST for a new product
const createProduct = (newItem: ProductObjectType) =>
  axios.post(productUrl, newItem);

// DELETE for delete particular product
const deleteProduct = (id: string) => axios.delete(`${productUrl}/${id}`);

const updateProduct = (id: string, product: ProductObjectType) => {
  axios.patch(`${productUrl}/${id}`, product);
};

export {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
