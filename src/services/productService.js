import http from "./httpService";
import { customerApiUrl } from "../config.json";

export function getProducts() {
  return http.get(customerApiUrl + "/products");
}
