import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Thuchanh1 from "./components/thuchanh1/Thuchanh1";
import Thuchanh2 from "./components/thuchanh2/Thuchanh2";
import Thuchanh3 from "./components/thuchanh3/Thuchanh3";
import Thuchanh4 from "./components/thuchanh4/Thuchanh4";
import Bai1 from "./components/bai1/Bai1";
import Bai2 from "./components/bai2/Bai2";
import Bai3 from "./components/bai3/Bai3";
import Bai4 from "./components/bai4/Bai4";
import Bai5 from "./components/bai5/Bai5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Thuchanh1 /> */}
    {/* <Thuchanh2 /> */}
    {/* <Thuchanh3 /> */}
    {/* <Thuchanh4 /> */}
    {/* <Bai1 /> */}
    {/* <Bai2 /> */}
    {/* <Bai3 /> */}
    {/* <Bai4 /> */}
    {/* <Bai5 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
