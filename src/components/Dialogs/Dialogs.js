import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./MessageList/MessageItemt";

const Dialogs = (props) => {
  console.log("Dialog"+props.state.dialogsData);
  let dialogsArr = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesArr = props.state.messagesData.map((message) => (
    <MessageItem message={message.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogList}>{dialogsArr}</div>
      <div className={style.messageList}>{messagesArr}</div>
    </div>
  );
};

export default Dialogs;
