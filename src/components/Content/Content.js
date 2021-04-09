import React from "react";
import { Route } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import Music from "../Music/Music";
import News from "../News/News";
import ProfileContainer from "../Profile/ProfileContainer";
import Settings from "../Settings/Settings";
import UsersContainer from "../Users/UsersContainer";
import style from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={style.main_content}>
      <Route path="/profile/:userId" render={(el) => <ProfileContainer />} />
      <Route path="/dialogs" render={(el) => <DialogsContainer />} />
      <Route path="/users" render={(el) => <UsersContainer />} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default Content;
