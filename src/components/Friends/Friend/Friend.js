import React from "react";
import Friends from "../Friends";
import style from "./Friend.module.css";

const Friend = ({ id, name, avatar }) => {
  return (
    <div className={style.friend} id={id}>
      {avatar === null ? (
        <img
          src={
            "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          }
          alt={name}
        />
      ) : (
        <img src={avatar} alt="avatar" />
      )}
      <div className={style.friendName}>{name}</div>
    </div>
  );
};

export default Friend;
