import http from "./httpService";
import { customerApiUrl } from "../config.json";

// const apiEndpoint = "http://localhost:3000/customers/create-user";

export function register(user) {
  return http.post(customerApiUrl + "/create-user/", {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phone: user.phone,
  });
}
