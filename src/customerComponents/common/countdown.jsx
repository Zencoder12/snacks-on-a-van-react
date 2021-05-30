import React, { useEffect, useState, useRef } from "react";

const Countdown = ({ orderTime }) => {
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState("00:00");

  function getRemainingTime(endTime) {
    const totalTime = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((totalTime / 1000) % 60);
    const minutes = Math.floor((totalTime / 1000 / 60) % 60);
    return { totalTime, seconds, minutes };
  }

  function startTimer(deadline) {
    let { totalTime, seconds, minutes } = getRemainingTime(deadline);
    if (totalTime >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else clearInterval(intervalRef.current);
  }

  function clearTimer(endtime) {
    setTimer("10:00");

    if (intervalRef.current) clearInterval(intervalRef);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  }

  function getDeadlineTime() {
    let deadline = new Date(orderTime);
    deadline.setMinutes(deadline.getMinutes() + 10);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadlineTime());

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return <div>{timer}</div>;
};

export default Countdown;
