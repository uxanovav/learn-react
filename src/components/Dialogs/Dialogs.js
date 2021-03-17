import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./MessageList/MessageItemt";

const Dialogs = ({addMessage,currentMessageText,updateMessageText,dialogsData,messagesData}) => {
  let dialogsArr = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesArr = messagesData.map((message) => (
    <MessageItem message={message.message} sender={message.sender} />
  ));

let newMessage = React.createRef();

let onAdd = () => {
  addMessage();
}

let onUpdate = () => {
  let text = newMessage.current.value;
  updateMessageText(text);
}

  return (
    <div className={style.dialogs}>
      <div className={style.dialogList}>{dialogsArr}</div>
      <div className={style.messageList}>
        <div>{messagesArr}</div>
        <div className={style.submitPanel}>
          <textarea ref={newMessage} onChange={onUpdate} value={currentMessageText}/>
          <button onClick={onAdd}>Submit</button>
        </div>
      </div>

    </div>
  );
};

export default Dialogs;
