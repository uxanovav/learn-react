import React from "react";
import style from "./MessageItem.module.css";

const MessageItem = (props) => {
  return (
    <div className={style.messageContent}>
       {props.message}
      </div>
  );
};

export default MessageItem;
