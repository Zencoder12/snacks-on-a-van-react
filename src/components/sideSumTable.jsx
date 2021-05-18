import React from "react";

const SideSumTable = () => {
  return (
    <div className="side-sum-table">
      <header className="side-sum-table__header">
        <h2 className="side-sum-table__heading">ORDER SUMMARY</h2>
        <hr className="title-underline" />
      </header>
      <div className="side-sum-table__data">
        <div className="items">
          <p className="data-name">NO. OF ITEMS</p>
          <p className="data-info">3 ITEMS</p>
        </div>
        <div className="total">
          <p className="data-name">TOTAL</p>
          <p className="data-info">$ 22</p>
        </div>
        <hr className="secondary-underline"></hr>
      </div>
      <div className="side_sum_table__vendor__data">
        <p className="data-name">PICK UP VENDOR:</p>
        <p className="data-info">MELBOURNE UNIVERSITY</p>
      </div>
      <hr className="secondary-underline"></hr>
      <button className="btn btn-primary btn-block" type="submit">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default SideSumTable;
