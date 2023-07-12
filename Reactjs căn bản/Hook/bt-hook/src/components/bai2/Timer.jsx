import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    // Clean up the interval
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      alert("Time's up");
    }
  }, [timer]);

  return <div>{timer}</div>;
};

export default Timer;
