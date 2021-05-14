import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
import auth from "./services/authService";
import "./App.css";

class App extends Component {
  state = {
    cartItems: [],
  };

  /* get user from jwt stored in the local storage */
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleAdd = (productName, img, price) => {
    const orderItemId = productName + price;
    const exist = this.state.cartItems.find((x) => x.id === orderItemId);
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
    this.syncCart();
  };

  handleCheckOut = (cartItems) => {
    console.log("the current cart has", this.state.cartItems);
    this.syncCart();
    window.location = "/customer/checkout";
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
            path="/customer/menu"
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
            path="/customer/checkout"
            render={(props) => (
              <Checkout
                onAdd={this.handleAdd}
                cartItems={this.state.cartItems}
                {...props}
              />
            )}
          />
          <Route path="/customer/orders" component={Orders} />
          <Route path="/customer/login" component={LoginRegister} />
          <Route path="/customer/logout" component={Logout} />
          <Route path="/error" component={ErrorPage} />
          <Route
            path="/customer/order-confirmation"
            component={OrderConfirmationPage}
          />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={LoginRegister} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
