import http from "./httpService";
import jwtDecode from "jwt-decode";
import { customerApiUrl, vendorApiUrl } from "../config.json";

// method to send jwt to http service (axios service module)
http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(customerApiUrl + "/auth", {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}

export function signUp(user) {
  return http.post(customerApiUrl + "/auth/sign-up", {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  });
}

export async function loginVendor(vendorName, password) {
  const { data: jwt } = await http.post(vendorApiUrl + "/auth", {
    vendorName,
    password,
  });
  localStorage.setItem("token", jwt);
}

export function signUpVendor(user) {
  return http.post(vendorApiUrl + "/auth/sign-up", {
    vendorName: user.vendorName,
    contactName: user.contactName,
    email: user.email,
    password: user.password,
    phone: user.phone,
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

export function isValidCustomer() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt).isCustomer;
  } catch (ex) {
    return null;
  }
}

export function isValidVendor() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt).isVendor;
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}

export default {
  login,
  signUp,
  loginVendor,
  signUpVendor,
  logout,
  getCurrentUser,
  getJwt,
  isValidCustomer,
  isValidVendor,
  loginWithJwt,
};
