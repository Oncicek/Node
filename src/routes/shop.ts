import express from "express";
import { getProducts, getProductsForAngular } from "../controllers/products.js";
import { deleteProduct } from "../controllers/shop.js";
export const router = express.Router();

router.get("/", getProducts);

router.get("/products", getProductsForAngular);

router.post("/product-delete/:id", deleteProduct);
