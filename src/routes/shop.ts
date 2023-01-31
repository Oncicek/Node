import express from "express";
import { getProducts } from "../controllers/products.js";
import { deleteProduct } from "../controllers/shop.js";
export const router = express.Router();

router.get("/", getProducts);

router.post("/product-delete/:id", deleteProduct);
