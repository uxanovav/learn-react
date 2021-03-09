import store from "./Redux/state";
import {subscriber} from "./Redux/state"
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

export const rerender = (state,addPost,updateCurrentPostText) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateCurrentPostText = {updateCurrentPostText}
        />,
        document.getElementById("root")
    );
};

subscriber(rerender);

rerender(store._state,store.addPost.bind(store),store.updateCurrentPostText.bind(store));
