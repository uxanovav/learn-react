import React from "react";
import { addNewMessageActionCreator, updateMessageTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({state,dispatch}) => {

let dialogsData = state.dialogsData;
let messagesData = state.messagesData;
let currentMessageText = state.currentMessageText;

let addMessage = () => {
  dispatch(addNewMessageActionCreator());
}

let updateMessageText = (text) => {
  dispatch(updateMessageTextActionCreator(text));
}

  return (
    <Dialogs addMessage={addMessage} 
    currentMessageText = {currentMessageText}
    updateMessageText = {updateMessageText}
    dialogsData = {dialogsData}
    messagesData = {messagesData}
    />
  );
};

export default DialogsContainer;
