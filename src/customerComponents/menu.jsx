import React, { Component } from "react";
import RadioGroup from "./common/radioGroup";
import LoginBanner from "./loginBanner";
import NavBar from "./navBar";
import SideCart from "./sideCart";
import auth from "../services/authService";

class Menu extends Component {
  state = {
    selectedPrice: 0,
  };

  handleChange = (price) => {
    this.setState({ selectedPrice: price });
  };

  render() {
    const { products, user, onAdd, cartItems } = this.props;
    const { selectedPrice } = this.state;
    const isCustomer = auth.isValidCustomer();

    let cartItemsClone = [...cartItems];

    const currentOrder = JSON.parse(localStorage.getItem("currentOrder"));
    if (currentOrder)
      cartItemsClone = [...cartItemsClone, ...currentOrder.orderItems];

    console.log("clone", cartItemsClone);

    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className="mb-5 px-2 px-md-5 row g-3">
          <div className="col-lg-8">
            <div className="col-lg-12">
              <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
                Coffee
              </h1>
              <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
                Coffee
              </h1>
              <div className="container p-3 rounded">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-3">
                  {products
                    .filter((product) => product.category === "coffee")
                    .map((product) => (
                      <div className="col" key={product._id}>
                        <div className="card shadow-sm">
                          <img
                            src={"https://i.ibb.co" + product.img674}
                            className="card-img-top"
                            alt="Latte"
                          />
                          <div className="card-body text-center">
                            <h3 className="card-title text-uppercase">
                              {product.productName}
                            </h3>
                            <RadioGroup
                              key={product._id}
                              prices={product.prices}
                              selectedPrice={this.state.selectedPrice}
                              onChange={this.handleChange}
                            />
                            {!user && (
                              <button
                                className="w-100 btn btn-secondary mt-3 fs-5 fw-bold disabled"
                                aria-disabled="true"
                              >
                                ADD TO CART
                              </button>
                            )}
                            {user && (
                              <button
                                className="w-100 btn btn-primary mt-3 fs-5 fw-bold"
                                onClick={() =>
                                  onAdd(product.productName, selectedPrice)
                                }
                              >
                                ADD TO CART
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
                dessert
              </h1>
              <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
                dessert
              </h1>
              <div className="container py-3 rounded">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-3">
                  {products
                    .filter((product) => product.category === "dessert")
                    .map((product) => (
                      <div className="col" key={product._id}>
                        <div className="card shadow-sm">
                          <img
                            src={"https://i.ibb.co" + product.img674}
                            className="card-img-top"
                            alt="Latte"
                          />
                          <div className="card-body text-center">
                            <h3 className="card-title text-uppercase">
                              {product.productName}
                            </h3>
                            <RadioGroup
                              key={product._id}
                              prices={product.prices}
                              selectedPrice={this.state.selectedPrice}
                              onChange={this.handleChange}
                            />
                            {!user && (
                              <button
                                className="w-100 btn btn-secondary mt-3 fs-5 fw-bold disabled"
                                aria-disabled="true"
                              >
                                ADD TO CART
                              </button>
                            )}
                            {user && (
                              <button
                                className="w-100 btn btn-primary mt-3 fs-5 fw-bold"
                                onClick={() =>
                                  onAdd(product.productName, selectedPrice)
                                }
                              >
                                ADD TO CART
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {!isCustomer && <LoginBanner />}
          {isCustomer && <SideCart cartItems={cartItemsClone} />}
        </main>
      </React.Fragment>
    );
  }
}

export default Menu;
