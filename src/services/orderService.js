import http from "./httpService";
import { customerApiUrl, localHostApi } from "../config.json";

const token = localStorage.getItem("token");

export function createOrder(vendor, orderItems) {
  return http.post(
    localHostApi + "/new-order/",
    { vendor, orderItems },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
}

export function getOrders() {
  return http.get(localHostApi + "/orders/", {
    headers: {
      "x-auth-token": token,
    },
  });
}
