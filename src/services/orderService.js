import http from "./httpService";
import {
  customerApiUrl,
  localHostApi,
  vendorLocalHostApi,
} from "../config.json";

export function createOrder(vendorName, orderItems) {
  return http.post(localHostApi + "/new-order/", { vendorName, orderItems });
}

export function getPastOrders() {
  return http.get(localHostApi + "/past-orders/");
}

export function getActiveOrders() {
  return http.get(localHostApi + "/active-orders/");
}

export function getVendorPastOrders() {
  return http.get(vendorLocalHostApi + "/past-orders");
}

export function getVendorActiveOrders() {
  return http.get(vendorLocalHostApi + "/active-orders/");
}

export function getReadyOrders() {
  return http.get(vendorLocalHostApi + "/ready-orders");
}
