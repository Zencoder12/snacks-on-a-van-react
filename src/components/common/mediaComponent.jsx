import React from "react";

const MediaComponent = ({ cartItem }) => {
  return (
    <div className="media">
      <img
        className="media__img"
        src={"https://i.pinimg.com/originals/" + cartItem.img}
        alt={cartItem.productName}
      />
      <div className="media__body">
        <h3 className="media__heading mt-2 mb-0">{cartItem.productName}</h3>
        <p className="media__size">
          Size: <i>Small</i>
        </p>
        <button className="btn">REMOVE</button>
      </div>
    </div>
  );
};

// btn btn-outline-secondary btn-sm mt-2

export default MediaComponent;
