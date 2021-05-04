import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./components/navBar";
import Orders from "./components/orders";
import Menu from "./components/menu";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import LoginRegister from "./components/loginRegister";
import NotFound from "./components/notFound";
import Logout from "./components/logout";
import "./App.css";

class App extends Component {
  state = {};

  /* get user from jwt stored in the local storage */
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/orders" component={Orders} />
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
