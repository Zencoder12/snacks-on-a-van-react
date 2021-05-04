import React from "react";
import NavBar from "./components/navBar";
import Orders from "./components/orders";
import Menu from "./components/menu";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import NotFound from "./components/notFound";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/orders" component={Orders} />
        <Route path="/login" component={LoginForm} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
