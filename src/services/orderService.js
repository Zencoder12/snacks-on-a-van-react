import http from "./httpService";

const apiEndpoint = "http://localhost:3000/customers";
const token = localStorage.getItem("token");

export function createOrder(vendor, orderItems) {
  return http.post(
    apiEndpoint + "/new-order",
    { vendor, orderItems },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
}

export function getOrders() {
  return http.get(apiEndpoint + "/orders", {
    headers: {
      "x-auth-token": token,
    },
  });
}
