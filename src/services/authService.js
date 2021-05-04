import http from "./httpService";

const apiEndpoint = "http://localhost:3000/customers/auth";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
