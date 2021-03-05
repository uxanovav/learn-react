import React from "react";
import Friends from "../Friends";
import style from "./Friend.module.css";

const Friend = () => {
  return (
    <div className={style.friend}>
      <img src="http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png" alt="avatar" />
      <div className={style.friendName}>Anna</div>
    </div>
  );
};

export default Friend;
