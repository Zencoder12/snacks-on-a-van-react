import { Component } from "react";
import auth from "../../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    sessionStorage.clear();
    window.location = "/customer/menu";
  }

  render() {
    return null;
  }
}

export default Logout;
