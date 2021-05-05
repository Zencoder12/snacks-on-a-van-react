import http from "./httpService";

const apiEndpoint = "http://localhost:3000/customers/create-user";

export function register(user) {
  return http.post(apiEndpoint, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phone: user.phone,
  });
}
