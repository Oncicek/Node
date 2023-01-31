import fs from "fs";
import { join } from "path";
import { getDirname } from "../utils/utils.js";

const path = join(getDirname(import.meta.url), "..", "data", "products.json");

const getProductsFromFile = (
  callback: (param?: string | Product[]) => void
) => {
  fs.readFile(path, "utf-8", (err, fileContent) => {
    if (err) return callback([]);
    if (fileContent.length > 0) {
      callback(JSON.parse(fileContent));
    }
  });
};

export class Product {
  name: string;
  kocka: string;
  url: string;

  constructor(name: string, kocka: string, url: string) {
    this.name = name;
    this.kocka = kocka;
    this.url = url;
  }

  save() {
    getProductsFromFile((products) => {
      if (
        products &&
        products instanceof Array<Product> &&
        typeof products === "object"
      ) {
        console.log("druhy");
        products.push(this);
      } else {
        products = [this];
      }
      console.log("vec");
      fs.writeFile(path, JSON.stringify(products), (err) => {
        console.log("toto je error: ", err);
      });
    });
  }

  static fetchAll(callback: (param: any) => void) {
    getProductsFromFile(callback);
  }
}
