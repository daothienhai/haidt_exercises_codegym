import React, { useState } from "react";

const Thuchanh1 = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <button onClick={decrease}>Decrease</button>
      <span style={{ padding: 10 }}>{number}</span>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Thuchanh1;
