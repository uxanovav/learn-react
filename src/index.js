import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import state from "./Redux/state";

ReactDOM.render(
  <App
    state={state}
  />,
  document.getElementById("root")
);
