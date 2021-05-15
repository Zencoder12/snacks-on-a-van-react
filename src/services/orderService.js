import http from "./httpService";
import { customerApiUrl, localHostApi } from "../config.json";

export function createOrder(vendor, orderItems) {
  return http.post(localHostApi + "/new-order/", { vendor, orderItems });
}

export function getOrders() {
  return http.get(localHostApi + "/orders/");
}
