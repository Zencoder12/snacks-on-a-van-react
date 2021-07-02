import React, { useEffect, useRef, useState } from "react";
import Countdown from "./countdown";

const ProgressBar = ({ orderTime, progressBarSmall }) => {
  const [width, setWidth] = useState("");
  {
    /* getting a intervalRef in order to be able to clear the progress bar interval  when it reaches 0% */
  }
  const intervalRef = useRef(null);

  function getTimeVariables(orderTime) {
    const endTime = addMinutes(new Date(orderTime), 15);
    const distance = endTime - new Date(orderTime);
    const d = new Date();
    const current = new Date(d.getTime());

    if (Date.parse(current) >= Date.parse(endTime)) {
      clearInterval(intervalRef.current);
      setWidth("0%");
    } else {
      return { endTime, distance, current };
    }
  }

  function calculatePercentage(orderTime) {
    let result = getTimeVariables(orderTime);
    if (result) {
      let { endTime, current, distance } = getTimeVariables(orderTime);
      return Math.floor(((endTime - current) / distance) * 100).toString();
    } else return "0";
  }

  {
    /* multiply by 60000 to get minutes in miliseconds */
  }
  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  useEffect(() => {
    var id = setInterval(() => {
      const percentage = calculatePercentage(orderTime);
      const formatedWidth = percentage + "%";
      setWidth(formatedWidth);
    }, 1000);
    intervalRef.current = id;

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <React.Fragment>
      {progressBarSmall && (
        <div className="prog-bar prog-bar--small">
          <div className="prog-bar__fill" style={{ width: width }}></div>
          <span className="prog-bar__text">
            <Countdown orderTime={orderTime} minutes={15} />
          </span>
        </div>
      )}
      {!progressBarSmall && (
        <div className="prog-bar">
          <div className="prog-bar__fill" style={{ width: width }}></div>
          <span className="prog-bar__text">
            <Countdown orderTime={orderTime} minutes={15} />
          </span>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProgressBar;
