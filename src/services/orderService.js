import http from "./httpService";

const apiEndpoint = "http://localhost:3000/customers/new-order ";

export function createOrder(vendor, orderItems) {
  const token = localStorage.getItem("token");

  console.log(vendor);
  console.log(orderItems);
  console.log(token);

  return http.post(
    apiEndpoint,
    { vendor, orderItems },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
}
