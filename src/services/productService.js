import http from "./httpService";
import { customerApiUrl, localHostApi } from "../config.json";

export function getProducts() {
  return http.get(localHostApi + "/products");
}

export function getProduct(productId) {
  return http.get(localHostApi + "/product/" + productId);
}
