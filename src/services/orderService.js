import http from "./httpService";
import { customerApiUrl, localHostApi } from "../config.json";

export function createOrder(vendor, orderItems) {
  return http.post(localHostApi + "/new-order/", { vendor, orderItems });
}

export function getPastOrders() {
  return http.get(localHostApi + "/past-orders/");
}

export function getActiveOrders() {
  return http.get(localHostApi + "/active-orders/");
}
