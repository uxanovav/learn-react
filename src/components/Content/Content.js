import React from "react";
import { Route } from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import Music from "../Music/Music";
import News from "../News/News";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import style from "./Content.module.css";

const Content = (props) => {
  debugger;
  return (
    <div className={style.main_content}>
      <Route
        path="/profile"
        render={(el) => (
          <Profile state={props.state.profilePage} dispatch={props.dispatch} />
        )}
      />
      <Route
        path="/dialogs"
        render={(el) => <Dialogs state={props.state.dialogsPage} />}
      />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default Content;
