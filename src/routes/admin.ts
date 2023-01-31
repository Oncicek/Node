import express from "express";
import { getAddProduct, postAddProduct } from "../controllers/products.js";

export const router = express.Router();

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);
