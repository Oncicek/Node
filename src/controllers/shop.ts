import { Request, Response, NextFunction } from "express";
import { Product } from "../models/product.js";

export const deleteProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const prodId = req.params.id;
  Product.delete(prodId);
  res.redirect("/shop");
};
