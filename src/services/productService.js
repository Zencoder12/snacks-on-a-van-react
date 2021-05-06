import http from "./httpService";
import { customerApiUrl } from "../config.json";

export function getProducts() {
  return http.get(customerApiUrl + "/products");
}

export function getProduct(productId) {
  return http.get(customerApiUrl + "/product/" + productId);
}
