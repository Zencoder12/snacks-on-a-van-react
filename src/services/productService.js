import http from "./httpService";

const backendEndPoint = "http://localhost:3000/products";

export function getProducts() {
  return http.get(backendEndPoint);
}
