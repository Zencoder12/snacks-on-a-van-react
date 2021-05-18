import React from "react";

const SummaryTableHeader = () => {
  return (
    <React.Fragment>
      <div className="sumtable__header">
        <div className="sumtable__fields">
          <h2 className="sumtable__fields__heading">PRODUCT DETAILS</h2>
        </div>
        <div className="sumtable__fields sumtable__fields__price">
          <h2 className="sumtable__fields__heading">PRICE</h2>
        </div>
        <div className="sumtable__fields sumtable__fields__qty">
          <h2 className="sumtable__fields__heading">QUANTITY</h2>
        </div>
        <div className="sumtable__fields sumtable__fields__subtotal">
          <h2 className="sumtable__fields__heading">SUBTOTAL</h2>
        </div>
      </div>
      <hr className="title-underline"></hr>
    </React.Fragment>
  );
};

export default SummaryTableHeader;
