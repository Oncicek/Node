import fs from "fs";
import { join } from "path";
import { getDirname } from "../utils/utils.js";

const path = join(getDirname(import.meta.url), "..", "data", "products.json");
const generateId = () => (Math.random() * 10000).toFixed();

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
  id: string = generateId();

  constructor(name: string, kocka: string, url: string) {
    this.name = name;
    this.kocka = kocka;
    this.url = url;
  }

  static delete(id: string) {
    console.log("pica");
    getProductsFromFile((products) => {
      if (products instanceof Array<Product>) {
        const filteredProducts = products.filter(
          (product) => product.id !== id
        );
        fs.writeFile(path, JSON.stringify(filteredProducts), (err) => {
          console.log("toto je error delete: ", err);
        });
      }
    });
  }

  save() {
    getProductsFromFile((products) => {
      if (
        products &&
        products instanceof Array<Product> &&
        typeof products === "object"
      ) {
        products.push(this);
      } else {
        products = [this];
      }
      fs.writeFile(path, JSON.stringify(products), (err) => {
        console.log("toto je error save: ", err);
      });
    });
  }

  static fetchAll(callback: (param: any) => void) {
    getProductsFromFile(callback);
  }
}
