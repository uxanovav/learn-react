import React from "react";
import style from "./MessageItem.module.css";

const MessageItem = (props) => {
  if (props.sender == 2) {
    return (
      <div className={style.messageContent}>
        <img
          src="http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png"
          alt="avatar"
        />
        <div>{props.message}</div>
      </div>
    );
  } else {
    return (
      <div className={style.yourMessageContent}>
        <div>{props.message}</div>
        <img
          src="http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png"
          alt="avatar"
        />
      </div>
    );
  }
};

export default MessageItem;
