import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h4>Browser's details: {navigator.userAgent}</h4>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
