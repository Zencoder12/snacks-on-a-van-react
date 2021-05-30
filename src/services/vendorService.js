import http from "./httpService";
import { vendorApiUrl, vendorLocalHostApi } from "../config.json";

export function setVendorLocation(vendorName, coordinates, address) {
  return http.post(vendorApiUrl + "/set-location", {
    vendorName: vendorName,
    coordinates: coordinates,
    address: address,
  });
}

export function getVendorsLocations() {
  return http.get(vendorApiUrl + "/vendors-locations");
}

export function closeLocation(vendorName) {
  return http.delete(vendorApiUrl + "/close-location", {
    data: { vendorName: vendorName },
  });
}

export function setOrderReady(orderId, isDiscounted) {
  return http.patch(vendorApiUrl + "/set-ready", {
    orderId: orderId,
    isDiscounted: isDiscounted,
    isReady: true,
  });
}

export function setOrderFulfill(orderId) {
  return http.patch(vendorApiUrl + "/set-fulfill", {
    orderId: orderId,
    isFulfilled: true,
  });
}

export function getCurrentVendor() {
  return JSON.parse(localStorage.getItem("vendor"));
}

export function getCurrentLocation() {
  return JSON.parse(localStorage.getItem("location"));
}
