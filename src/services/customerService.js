import http from "./httpService";
import { customerApiUrl, localHostApi } from "../config.json";

export async function updateProfile(firstName, lastName, password) {
  return http.patch(customerApiUrl + "/update-profile", {
    firstName: firstName,
    lastName: lastName,
    password: password,
  });
}
