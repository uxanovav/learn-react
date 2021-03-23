import React from "react";
import { Route } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import Music from "../Music/Music";
import News from "../News/News";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import style from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={style.main_content}>
      <Route
        path="/profile"
        render={(el) => (
          <Profile />
        )}
      />
      <Route
        path="/dialogs"
        render={(el) => (
          <DialogsContainer />
        )}
      />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default Content;
