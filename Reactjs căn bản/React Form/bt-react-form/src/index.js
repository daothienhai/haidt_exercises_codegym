import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormLogin from "./components/thuchanh1/FormLogin";
import ValidateFormRegister from "./components/thuchanh2/ValidateFormRegister";
import ValidateFormLogin from "./components/thuchanh3/ValidateFormLogin";
import FormikValiFormLogin from "./components/thuchanh4/FormikValiFormLogin";
import Bai1 from "./components/bai1/Bai1";
import Bai2 from "./components/bai2/Bai2";
import Bai3 from "./components/bai3/Bai3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FormLogin /> */}
    {/* <ValidateFormRegister /> */}
    {/* <ValidateFormLogin /> */}
    {/* <FormikValiFormLogin /> */}
    {/* <Bai1 /> */}
    {/* <Bai2 /> */}
    <Bai3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
