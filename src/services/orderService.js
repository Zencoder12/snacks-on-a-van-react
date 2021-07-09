import http from "./httpService";
import {
  customerApiUrl,
  vendorApiUrl,
  localHostApi,
  vendorLocalHostApi,
} from "../config.json";

export function createOrder(vendorName, orderItems) {
  return http.post(customerApiUrl + "/new-order/", { vendorName, orderItems });
}

export function getPastOrders() {
  return http.get(customerApiUrl + "/past-orders/");
}

export function getActiveOrders() {
  return http.get(customerApiUrl + "/active-orders/");
}

export function getOneOrder(orderId) {
  return http.post(customerApiUrl + "/get-order", {
    orderId: orderId,
  });
}

export function changeOrder(orderId, orderItems) {
  return http.patch(customerApiUrl + "/update-order", {
    orderId: orderId,
    orderItems: orderItems,
  });
}

export function cancelOrder(orderId) {
  return http.patch(customerApiUrl + "/cancel-order/", {
    orderId: orderId,
    isCancelled: true,
  });
}

export function getVendorPastOrders() {
  return http.get(vendorApiUrl + "/past-orders");
}

export function getVendorActiveOrders() {
  return http.get(vendorApiUrl + "/active-orders/");
}

export function getReadyOrders() {
  return http.get(vendorApiUrl + "/ready-orders");
}
