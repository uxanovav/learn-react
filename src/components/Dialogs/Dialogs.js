import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./MessageList/MessageItemt";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogList}>
        <DialogItem name="Anna" id="1"/>
      </div>
      <div className={style.messageList}>
        <MessageItem />
      </div>
    </div>
  );
};

export default Dialogs;
