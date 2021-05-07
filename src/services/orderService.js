import http from "./httpService";
import { customerApiUrl } from "../config.json";

// const apiEndpoint = "http://localhost:3000/customers";
const token = localStorage.getItem("token");

export function createOrder(vendor, orderItems) {
  return http.post(
    customerApiUrl + "/new-order/",
    { vendor, orderItems },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
}

export function getOrders() {
  return http.get(customerApiUrl + "/orders/", {
    headers: {
      "x-auth-token": token,
    },
  });
}
