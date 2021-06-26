import http from "./httpService";
import { vendorApiUrl, vendorLocalHostApi } from "../config.json";

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

export function getCurrentLocation() {
  return http.get(vendorLocalHostApi + "/vendor-location");
}

export function closeLocation(vendorName) {
  return http.delete(vendorLocalHostApi + "/close-location", {
    data: { vendorName: vendorName },
  });
}

export function setOrderReady(orderId, isDiscounted) {
  return http.patch(vendorLocalHostApi + "/set-ready", {
    orderId: orderId,
    isDiscounted: isDiscounted,
    isReady: true,
  });
}

export function setOrderFulfill(orderId) {
  return http.patch(vendorLocalHostApi + "/set-fulfill", {
    orderId: orderId,
    isFulfilled: true,
  });
}

export function getCurrentVendor() {
  return JSON.parse(localStorage.getItem("vendor"));
}
