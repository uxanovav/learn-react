import React from "react";
import Friend from "./Friend/Friend";
import style from "./Friends.module.css";

const Friends = () => {
  return (
    <div className={style.friendsPanel}>
      <div className={style.header}>
        <h2>Friends</h2>
      </div>
      <div className={style.friendsList}>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
};

export default Friends;
