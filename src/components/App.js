import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [time, setTime] = useState(0);

  const handlekeydown = (event) => {
    if (event.keyCode === 13) {
      const num = Math.floor(event.target.value);
      if (isNumber(num) && num > 0) {
        setTime(num);
      } else {
        setTime(0);
      }
    }
  };

  useEffect(() => {
    if (time === 1) {
      return;
    }
    const timerID = setTimeout(() => {
      const tTime = time - 1;
      setTime(tTime);
    }, 1000);

    return () => clearInterval(timerID);
  }, [time]);

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handlekeydown} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
