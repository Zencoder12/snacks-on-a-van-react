import React from "react";

const ProgressBarStatic = ({ orderTime }) => {
  const timeToMakeOrder = Math.floor(
    (Date.parse(new Date()) - Date.parse(orderTime)) / 1000 / 60
  );
  return (
    <div className="prog-bar-static">
      <div className="prog-bar__fill"></div>
      <span className="prog-bar__text">
        Time to make order: {timeToMakeOrder} min
      </span>
    </div>
  );
};

export default ProgressBarStatic;
