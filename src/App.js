import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import CheckoutPage from "./components/checkoutPage";
import Menu2 from "./components/menu2";
import ProtectedRoute from "./components/protectedRoute";
import LoginRegisterPage from "./components/loginRegisterPage";
import NotFound from "./components/notFound";
import Logout from "./components/logout";
import ErrorPage from "./components/errorPage";
import OrderConfirmationPage from "./components/orderConfirmationPage";
import OrdersPage from "./components/ordersPage";
import Home from "./components/home";
import auth from "./services/authService";
import { getProducts } from "./services/productService";
import "./App.css";

class App extends Component {
  state = {
    allProducts: [],
    cartItems: [],
  };

  /* get user from jwt stored in the local storage */
  async componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
    const { data } = await getProducts();
    this.setState({ allProducts: data });
  }

  handleAdd = (productName, img, price) => {
    console.log("All products:", this.state.allProducts);
    console.log(this.state.allProducts);
    const selectedProduct = this.state.allProducts.filter(
      (product) => productName === product.productName
    );
    console.log("Selected product is:", selectedProduct);

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

  handleCheckOut = (history) => {
    if (!this.state.user) alert("You are not logged in.");
    this.syncCart();
    console.log(history);
    // go to checkout page
  };

  handleReset = () => {
    this.setState({ cartItems: [] });
  };

  syncCart = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cartItems));
  };

  render() {
    const { allProducts, cartItems } = this.state;

    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <Switch>
          <Route
            path="/customer/menu"
            render={(props) => (
              <Menu2
                onAdd={this.handleAdd}
                onCheckOut={this.handleCheckOut}
                onReset={this.handleReset}
                cartItems={cartItems}
                products={allProducts}
                user={this.state.user}
                {...props}
              />
            )}
          />
          <ProtectedRoute
            path="/customer/checkout"
            render={(props) => (
              <CheckoutPage
                onAdd={this.handleAdd}
                cartItems={this.state.cartItems}
                {...props}
              />
            )}
          />
          <Route path="/customer/orders" component={OrdersPage} />
          <Route path="/customer/login" component={LoginRegisterPage} />
          <Route path="/customer/logout" component={Logout} />
          <Route path="/error" component={ErrorPage} />
          <Route
            path="/customer/order-confirmation"
            component={OrderConfirmationPage}
          />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
