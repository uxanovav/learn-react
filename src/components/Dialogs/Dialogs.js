import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./MessageList/MessageItemt";

const Dialogs = (props) => {
  console.log("Dialog" + props.state.dialogsData);
  let dialogsArr = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesArr = props.state.messagesData.map((message) => (
    <MessageItem message={message.message} sender={message.sender} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogList}>{dialogsArr}</div>
      <div className={style.messageList}>
        <div>{messagesArr}</div>
        <div className={style.submitPanel}>
          <textarea></textarea>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
