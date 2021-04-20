import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";

export const rerender = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

window.store = store;

rerender();

store.subscribe(() => {
  rerender();
});
