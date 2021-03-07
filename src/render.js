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
      console.log(state.profilePage.currentPostText);
};

