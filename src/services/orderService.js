import http from "./httpService";
import auth from "./authService";
import { customerApiUrl, localHostApi } from "../config.json";

export function createOrder(vendor, orderItems) {
  return http.post(localHostApi + "/new-order/", { vendor, orderItems });
}

export function getOrders() {
  return http.get(localHostApi + "/orders/");
}
