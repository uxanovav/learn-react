import React from "react";
import { addNewMessageActionCreator, updateMessageTextActionCreator } from "../../Redux/state";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./MessageList/MessageItemt";

const Dialogs = ({state,dispatch}) => {
  console.log("Dialog" + state.dialogsData);
  let dialogsArr = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesArr = state.messagesData.map((message) => (
    <MessageItem message={message.message} sender={message.sender} />
  ));

let newMessage = React.createRef();

let addMessage = () => {
  let text = newMessage.current.value;
  dispatch(addNewMessageActionCreator(text));
  newMessage.current.value = "";
}

let updateMessageText = () => {
  let text = newMessage.current.value;
  dispatch(updateMessageTextActionCreator(text));
}

  return (
    <div className={style.dialogs}>
      <div className={style.dialogList}>{dialogsArr}</div>
      <div className={style.messageList}>
        <div>{messagesArr}</div>
        <div className={style.submitPanel}>
          <textarea ref={newMessage} onChange={updateMessageText}/>
          <button onClick={addMessage}>Submit</button>
        </div>
      </div>

    </div>
  );
};

export default Dialogs;
