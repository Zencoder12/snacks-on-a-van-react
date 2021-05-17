import React from "react";

const MediaComponent = () => {
  // ({ cartItem })
  return (
    <div className="media">
      <img
        src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80"
        alt=""
        className="media-img"
      />
      {/* <img
            className="media-img"
            src={"https://i.pinimg.com/originals/" + cartItem.img}
            alt={cartItem.productName}
          /> */}
      <div className="media-body ml-3 mt-2">
        <h3 className="media-heading mt-2 mb-0">CAPPUCCINO</h3>
        <p>
          Size: <i>Small</i>
        </p>
        <button className="media-btn">REMOVE</button>
      </div>
    </div>
  );
};

// btn btn-outline-secondary btn-sm mt-2

export default MediaComponent;
