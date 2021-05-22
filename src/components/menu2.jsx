import React from "react";
import { Link } from "react-router-dom";
import RadioGroup from "./common/radioGroup";

const Menu2 = ({ products }) => {
  return (
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
                        src={"https://i.ibb.co" + product.img}
                        className="card-img-top"
                        alt="Latte"
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-uppercase">
                          {product.productName}
                        </h3>
                        <RadioGroup prices={product.prices} />
                        <Link
                          to="#"
                          className="w-100 btn btn-secondary mt-3 fs-5 fw-bold disabled"
                          aria-disabled="true"
                        >
                          ADD TO CART
                        </Link>
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
                        src={"https://i.ibb.co" + product.img}
                        className="card-img-top"
                        alt="Latte"
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-uppercase">
                          {product.productName}
                        </h3>
                        <RadioGroup prices={product.prices} />
                        <Link
                          to="#"
                          className="w-100 btn btn-secondary mt-3 fs-5 fw-bold disabled"
                          aria-disabled="true"
                        >
                          ADD TO CART
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-none d-lg-block">
        <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center">
          order summary
        </h1>
        <div className="pt-3 table-responsive container rounded fs-5">
          <h1 className="my-5 text-center display-4 text-uppercase fw-bold text-black-50">
            login to begin order
          </h1>
          <Link
            to="./login.html"
            className="w-100 btn btn-primary my-3 text-uppercase fs-5 fw-bold"
            id="btn-log"
          >
            Login / Register
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Menu2;
