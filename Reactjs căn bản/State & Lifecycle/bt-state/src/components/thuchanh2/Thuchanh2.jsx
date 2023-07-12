import React, { useState, useEffect } from "react";

const Thuchanh2 = () => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColor("pink");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          paddingTop: 20,
          width: 400,
          height: 80,
          margin: "auto",
        }}
      />
    </div>
  );
};

export default Thuchanh2;
