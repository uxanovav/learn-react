import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

export const rerender = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

rerender(store.getState());

store.subscribe(() => {
  rerender(store.getState());
});
