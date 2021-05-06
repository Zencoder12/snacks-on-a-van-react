import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./components/navBar";
import Orders from "./components/orders";
import Menu from "./components/menu";
import ProductDetails from "./components/productDetails";
import Home from "./components/home";
import LoginRegister from "./components/loginRegister";
import NotFound from "./components/notFound";
import Logout from "./components/logout";
import "./App.css";

class App extends Component {
  state = {
    cartItems: [],
  };

  /* get user from jwt stored in the local storage */
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  handleCheckOut = (cartItems) => {
    console.log("the current cart has", this.state.cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.location = "/orders";
  };

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
          <Route
            path="/menu"
            render={(props) => (
              <Menu onCheckOut={this.handleCheckOut} {...props} />
            )}
          />
          <Route
            path="/orders"
            render={(props) => (
              <Orders cartItems={this.state.cartItems} {...props} />
            )}
          />
          <Route path="/login" component={LoginRegister} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
