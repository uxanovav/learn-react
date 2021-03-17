import store from "./Redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

export const rerender = (state,dispatch) => {
    ReactDOM.render(
        <App
            state={state}
            dispatch={dispatch}
        />,
        document.getElementById("root")
    );
};

store.subscriber(rerender);

rerender(store.getState(),store.dispatch.bind(store));
