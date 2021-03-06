import React, { Component } from "react";
import auth from "../../services/authService";
import RadioGroup from "../menuComponents/radioGroup";
import LoginBanner from "../menuComponents/loginBanner";
import SideCart from "../menuComponents/sideCart";
import NavBar from "../common/navBar";

class MenuPage extends Component {
  state = {
    selectedPrice: 0,
  };

  handleChange = (price) => {
    this.setState({ selectedPrice: price });
  };

  render() {
    const { products, onAdd, cartItems } = this.props;
    const { selectedPrice } = this.state;
    const isCustomer = auth.isValidCustomer();

    // let cartItemsClone = [...cartItems];

    // const currentOrder = JSON.parse(sessionStorage.getItem("currentOrder"));
    // if (currentOrder)
    //   cartItemsClone = [...cartItemsClone, ...currentOrder.orderItems];

    // console.log("clone", cartItemsClone);

    return (
      <React.Fragment>
        <NavBar />
        <main className="mb-5 px-2 px-md-5 row g-3">
          {/* products list container. stacked until screen < 960 px. Then become 8 cols grid */}
          <div className="col-lg-8">
            {/* coffee category + product cards wrapper container */}
            <div className="col-lg-12">
              {/* heading for screens > 960px (left-aligned) */}
              <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
                Coffee
              </h1>
              {/* heading for screens < 960px (centered) */}
              <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
                Coffee
              </h1>
              <div className="container p-3 rounded">
                {/* products inner-container. stacked for screens < 768px, 2 cols screen < 920px, 4 cols larger screens */}
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
                            {!isCustomer && (
                              <button
                                className="w-100 btn btn-secondary mt-3 fs-5 fw-bold disabled"
                                aria-disabled="true"
                              >
                                ADD TO CART
                              </button>
                            )}
                            {isCustomer && (
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
            {/* dessert category + product cards wrapper container */}
            <div className="col-lg-12">
              {/* heading for screens > 960px (left-aligned) */}
              <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
                dessert
              </h1>
              {/* heading for screens < 960px (centered) */}
              <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
                dessert
              </h1>
              <div className="container py-3 rounded">
                {/* products inner-container. stacked for screens < 768px, 2 cols screen < 920px, 4 cols larger screens */}
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
                            {!isCustomer && (
                              <button
                                className="w-100 btn btn-secondary mt-3 fs-5 fw-bold disabled"
                                aria-disabled="true"
                              >
                                ADD TO CART
                              </button>
                            )}
                            {isCustomer && (
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
          {/* side banners. stacked below products on small devices. Takes reamaining space on screens > 920px */}
          {!isCustomer && <LoginBanner />}
          {isCustomer && <SideCart cartItems={cartItems} props={this.props} />}
        </main>
      </React.Fragment>
    );
  }
}

export default MenuPage;
