import http from "./httpService";
import { customerApiUrl, localHostApi } from "../config.json";

export async function updateProfile(user) {
  return http.patch(localHostApi + "/update-profile", {
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
  });
}
