import http from "./httpService";
import { customerApiUrl } from "../config.json";

// const apiEndpoint = "http://localhost:3000/customers/auth";

export function login(email, password) {
  return http.post(customerApiUrl + "/auth/", { email, password });
}
