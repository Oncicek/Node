import { Request, Response, NextFunction } from "express";
import { join } from "path";
import { Product } from "../models/product.js";
import { getDirname } from "../utils/utils.js";

export const getAddProduct = (
  req: Request<Product>,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  res.sendFile(
    join(getDirname(import.meta.url), "..", "Views", "add-product.html")
  );
};

export const postAddProduct = (
  req: Request<Product>,
  res: Response,
  next: NextFunction
) => {
  const { name, kocka, url } = req.body;
  const product = new Product(name, kocka, url);
  product.save();
  console.log("toto prošlo v pohodě: ", req.body);
  res.redirect("/shop");
};

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Product.fetchAll((products) => {
    console.log(products);
    res.render("shop", { products, hasProducts: products.length > 0 });
  });
};

export const getProductsForAngular = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Product.fetchAll((products) => {
    console.log(products);
    res.status(200).json(products);
  });
  next();
};
