import React from "react";
import ReactDOM from "react-dom";
import TopNavBar from "./components/topnav";
import App from "./App"; //MUST BE TURNED INTO SOMETHING ELSE


ReactDOM.render(
  <React.StrictMode>
    <TopNavBar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

