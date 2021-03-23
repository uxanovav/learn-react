import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import StoreContext from "./storecontext";

export const rerender = (state) => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>,
    document.getElementById("root")
  );
};

rerender(store.getState());

store.subscribe(() => {
  rerender(store.getState());
});
