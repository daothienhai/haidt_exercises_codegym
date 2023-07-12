import React, { useState } from "react";
import Hello from "./Hello";

const Thuchanh3 = () => {
  const [display, setDisplay] = useState(true);

  const deleteComponent = () => {
    setDisplay(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {display && <Hello />}
      <button onClick={deleteComponent}>Delete the component</button>
    </div>
  );
};

export default Thuchanh3;
