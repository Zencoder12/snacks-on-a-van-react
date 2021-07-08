import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getProducts } from "./services/productService";
import MenuPage from "./customerComponents/page/menuPage";
import CProtectedRoute from "./customerComponents/common/cProtectedRoute";
import VProtectedRoute from "./vendorComponents/common/vProtectedRoute";
import LoginPage from "./customerComponents/page/loginPage";
import RegisterPage from "./customerComponents/page/registerPage";
import NotFound from "./generalComponents/notFound";
import Logout from "./customerComponents/common/logout";
import customerErrorPage from "./customerComponents/page/customerErrorPage";
import Index from "./generalComponents/index";
import ShoppingCartPage from "./customerComponents/page/shoppingCartPage";
import PreviousOrdersPage from "./customerComponents/page/previousOrdersPage";
import ActiveOrdersPage from "./customerComponents/page/activeOrdersPage";
import TrackOrderPage from "./customerComponents/page/trackOrderPage";
import ProfilePage from "./customerComponents/page/profilePage";
import SelectVendorPage from "./customerComponents/page/selectVendorPage";
import VendorLoginPage from "./vendorComponents/page/vendorLoginPage";
import VendorRegisterPage from "./vendorComponents/page/vendorRegisterPage";
import SetLocationPage from "./vendorComponents/page/setLocationPage";
import VendorActOrdersPage from "./vendorComponents/page/vendorActOrdersPage";
import VendorAwtOrdersPage from "./vendorComponents/page/vendorAwtOrdersPage";
import VendorLogout from "./vendorComponents/common/vendorLogout";
import VendorProfilePage from "./vendorComponents/page/vendorProfilePage";
import VendorPreviousOrdersPage from "./vendorComponents/page/vendorPreviousOrdersPage";
import vendorErrorPage from "./vendorComponents/page/vendorErrorPage";
import BadRequest from "./generalComponents/badRequestPage";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    allProducts: [],
    cartItems: [],
  };

  async componentDidMount() {
    const { data } = await getProducts();
    this.setState({ allProducts: data });
  }

  handleAdd = (productName, price) => {
    console.log(
      `On add button clicked. product name = ${productName}, price = ${price}.`
    );
    if (price === 0) return toast.warning("Please select a product.");

    const product = this.state.allProducts.filter(
      (product) => product.productName === productName
    );

    const size = this.getSizeByValue(product, price);

    const orderItemId = productName + price;

    const exist = this.state.cartItems.find((x) => x.id === orderItemId);
    if (exist) {
      {
        /* getting all items in shopping cart except for the current selected item */
      }
      const updatedCartItems = this.state.cartItems.filter(
        (x) => x.id !== orderItemId
      );
      /* set the cart state with all items plus selected item with updated quantity */
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
            size: size,
            img100: product[0].img100,
            img50: product[0].img50,
            price: price,
            qty: 1,
          },
        ],
      });
    }
  };

  handleRemove = (productName, price) => {
    const product = this.state.allProducts.filter(
      (product) => product.productName === productName
    );

    const size = this.getSizeByValue(product, price);

    const orderItemId = productName + price;

    const exist = this.state.cartItems.find((x) => x.id === orderItemId);
    if (exist) {
      const updatedCartItems = this.state.cartItems.filter(
        (x) => x.id !== orderItemId
      );
      if (exist.qty === 1) {
        this.setState({ cartItems: [...updatedCartItems] });
      } else {
        this.setState({
          cartItems: [...updatedCartItems, { ...exist, qty: exist.qty - 1 }],
        });
      }
    } else {
      this.setState({
        cartItems: [
          ...this.state.cartItems,
          {
            id: orderItemId,
            productName: productName,
            size: size,
            img100: product[0].img100,
            img50: product[0].img50,
            price: price,
            qty: 1,
          },
        ],
      });
    }
  };

  getSizeByValue = (product, price) => {
    const prices = product[0].prices;
    return Object.keys(prices).find((key) => prices[key] == price);
  };

  syncCart = () => {
    sessionStorage.setItem("cart", JSON.stringify(this.state.cartItems));
  };

  render() {
    {
      /* syncCart will be called every time state changes (i.e add or remove items). */
    }
    this.syncCart();
    const { allProducts, cartItems } = this.state;

    return (
      <React.Fragment>
        <ToastContainer autoClose={3000} />
        <Switch>
          <Route
            path="/customer/menu"
            render={(props) => (
              <MenuPage
                onAdd={this.handleAdd}
                cartItems={cartItems}
                products={allProducts}
                {...props}
              />
            )}
          />
          <CProtectedRoute
            path="/customer/checkout"
            render={(props) => (
              <ShoppingCartPage
                onAdd={this.handleAdd}
                onRemove={this.handleRemove}
                {...props}
              />
            )}
          />
          <Route
            path="/customer/login"
            render={(props) => <LoginPage {...props} />}
          />
          <Route
            path="/customer/register"
            render={(props) => <RegisterPage {...props} />}
          />
          <Route path="/customer/select-vendor" component={SelectVendorPage} />
          <Route path="/customer/logout" component={Logout} />
          <Route path="/vendor/logout" component={VendorLogout} />
          <Route path="/400" component={BadRequest} />
          <Route path="/error-customer" component={customerErrorPage} />
          <Route path="/error-vendor" component={vendorErrorPage} />
          <CProtectedRoute
            path="/customer/profile"
            render={(props) => <ProfilePage {...props} />}
          />
          <VProtectedRoute
            path="/vendor/profile"
            render={(props) => <VendorProfilePage {...props} />}
          />
          <CProtectedRoute
            path="/customer/previous-orders"
            render={(props) => <PreviousOrdersPage {...props} />}
          />
          <CProtectedRoute
            path="/customer/active-orders"
            render={(props) => <ActiveOrdersPage {...props} />}
          />
          <CProtectedRoute
            path="/customer/tracking-order"
            render={(props) => <TrackOrderPage {...props} />}
          />
          <Route path="/vendor/login" component={VendorLoginPage} />
          <Route path="/vendor/register" component={VendorRegisterPage} />
          <VProtectedRoute
            path="/vendor/set-location"
            render={(props) => <SetLocationPage {...props} />}
          />
          <VProtectedRoute
            path="/vendor/active-orders"
            render={(props) => <VendorActOrdersPage {...props} />}
          />
          <VProtectedRoute
            path="/vendor/await-orders"
            render={(props) => <VendorAwtOrdersPage {...props} />}
          />
          <VProtectedRoute
            path="/vendor/previous-orders"
            render={(props) => <VendorPreviousOrdersPage {...props} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Index} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
