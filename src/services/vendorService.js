import http from "./httpService";
import {
  customerApiUrl,
  localHostApi,
  vendorLocalHostApi,
} from "../config.json";

export function setVendorLocation(vendorName, coordinates, address) {
  return http.post(vendorLocalHostApi + "/set-location", {
    vendorName: vendorName,
    coordinates: coordinates,
    address: address,
  });
}

export function getVendorsLocations() {
  return http.get(vendorLocalHostApi + "/vendors-locations");
}

export function closeLocation(vendorName) {
  return http.delete(vendorLocalHostApi + "/close-location", {
    data: { vendorName: vendorName },
  });
}

export function getCurrentVendor() {
  return JSON.parse(localStorage.getItem("vendor"));
}

export function getCurrentLocation() {
  return JSON.parse(localStorage.getItem("location"));
}
