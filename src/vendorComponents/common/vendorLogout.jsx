import { Component } from "react";
import auth from "../../services/authService";
import {
  closeLocation,
  getCurrentLocation,
} from "../../services/vendorService";

class Logout extends Component {
  async componentDidMount() {
    auth.logout();
    const vendorLocation = getCurrentLocation();
    if (vendorLocation) await closeLocation(vendorLocation.vendorName);
    localStorage.clear();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
