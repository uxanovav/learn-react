import React from "react";
import Friend from "./Friend/Friend";
import style from "./Friends.module.css";

const Friends = (props) => {
  let friendsArr = props.friendsData.map((friend) => (
      <Friend id={friend.id} name={friend.name} avatar={friend.avatar} />
    ));

  return (
    <div className={style.friendsPanel}>
      <div className={style.header}>
        <h2>Friends</h2>
      </div>
      <div className={style.friendsList}>{friendsArr}</div>
    </div>
  );
};

export default Friends;
