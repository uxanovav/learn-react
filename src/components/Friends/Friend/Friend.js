import React from "react";
import Friends from "../Friends";
import style from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={style.friend} id={props.id}>
      <img src={props.avatar} alt="avatar" />
      <div className={style.friendName}>{props.name}</div>
    </div>
  );
};

export default Friend;
