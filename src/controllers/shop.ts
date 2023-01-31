import { Request, Response, NextFunction } from "express";
import { Product } from "../models/product";

export const deleteProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Product.delete("25");
  console.log("ahojky");
  res.redirect("/shop");
};
