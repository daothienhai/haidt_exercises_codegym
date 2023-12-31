import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counter from "./components/thuchanh1/Counter";
import Selector from "./components/thuchanh2/Selector";
import Car from "./components/bai1/Car";
import Timer from "./components/bai2/Timer";
import MyClock from "./components/thuchanh3/MyClock";
import Bai3 from "./components/bai3/Bai3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Selector /> */}
    {/* <Car /> */}
    {/* <Timer /> */}
    {/* <MyClock /> */}
    <Bai3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
