import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./components/navBar";
import Checkout from "./components/checkout";
import Menu from "./components/menu";
import ProductDetails from "./components/productDetails";
import LoginRegister from "./components/loginRegister";
import NotFound from "./components/notFound";
import Logout from "./components/logout";
import ErrorPage from "./components/errorPage";
import OrderConfirmationPage from "./components/orderConfirmationPage";
import Orders from "./components/orders";
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

  handleAdd = (productName, img, price) => {
    console.log("cartItems before finding", this.state.cartItems);
    console.log(productName);
    const orderItemId = productName + price;
    console.group("resulting id", orderItemId);
    const exist = this.state.cartItems.find((x) => x.id === orderItemId);
    console.log("this", exist);
    if (exist) {
      const updatedCartItems = this.state.cartItems.filter(
        (x) => x.id !== orderItemId
      );
      this.setState({
        cartItems: [...updatedCartItems, { ...exist, qty: exist.qty + 1 }],
      });
    } else {
      this.setState({
        cartItems: [
          ...this.state.cartItems,
          {
            id: orderItemId,
            productName: productName,
            img: img,
            price: price,
            qty: 1,
          },
        ],
      });
    }
    console.log("cartItem before syncing", this.state.cartItems);
    this.syncCart();
  };

  handleCheckOut = (cartItems) => {
    console.log("the current cart has", this.state.cartItems);
    this.syncCart();
    window.location = "/checkout";
  };

  handleReset = () => {
    this.setState({ cartItems: [] });
  };

  syncCart = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cartItems));
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
              <Menu
                onAdd={this.handleAdd}
                onCheckOut={this.handleCheckOut}
                onReset={this.handleReset}
                cartItems={this.state.cartItems}
                {...props}
              />
            )}
          />
          <Route
            path="/checkout"
            render={(props) => (
              <Checkout
                onAdd={this.handleAdd}
                cartItems={this.state.cartItems}
                {...props}
              />
            )}
          />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={LoginRegister} />
          <Route path="/logout" component={Logout} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/order-confirmation" component={OrderConfirmationPage} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Menu} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
