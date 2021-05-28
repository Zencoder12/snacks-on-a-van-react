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
