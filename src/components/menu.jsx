import React, { Component } from "react";
import { getProducts } from "../services/productService";
import MenuRow from "./menuRow";
import Cart from "./cart";

class Menu extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await getProducts();
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-9">
              <MenuRow
                onAdd={this.props.onAdd}
                category={"coffee"}
                products={products}
              />
              <MenuRow
                onAdd={this.props.onAdd}
                category={"dessert"}
                products={products}
              />
            </div>
            <div className="col-sm-6 col-md-3">
              <Cart
                cartItems={this.props.cartItems}
                history={this.props.history}
                onReset={this.props.onReset}
                onCheckOut={() => this.props.onCheckOut(this.state.cartItems)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
