import React from "react";
import {
  addNewMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../Redux/dialogs-reducer";
import StoreContext from "../../storecontext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        debugger;
        let dialogsData = store.getState().dialogsReducer.dialogsData;
        let messagesData = store.getState().dialogsReducer.messagesData;
        let currentMessageText = store.getState().dialogsReducer.currentMessageText;

        let addMessage = () => {
          store.dispatch(addNewMessageActionCreator());
        };

        let updateMessageText = (text) => {
          store.dispatch(updateMessageTextActionCreator(text));
        };
        return (
          <Dialogs
            addMessage={addMessage}
            currentMessageText={currentMessageText}
            updateMessageText={updateMessageText}
            dialogsData={dialogsData}
            messagesData={messagesData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
