import http from "./httpService";
import jwtDecode from "jwt-decode";
import { customerApiUrl, localHostApi } from "../config.json";

// method to send jwt to http service (axios service module)
http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(localHostApi + "/auth", {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}

export function signUp(user) {
  return http.post(localHostApi + "/auth/sign-up", {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  });
}

export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}

export default { login, signUp, logout, getCurrentUser, getJwt, loginWithJwt };
