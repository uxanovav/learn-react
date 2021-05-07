import { connect } from "react-redux";
import { dialogActions } from "../../Redux/actions";
import Dialogs from "./Dialogs";

const MapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsReducer.dialogsData,
    messagesData: state.dialogsReducer.messagesData,
    currentMessageText: state.dialogsReducer.currentMessageText,
    isAuth: state.authReducer.isAuth,
  };
};

const addMessage = dialogActions.addNewMessage;
const updateMessageText = dialogActions.updateMessageText;

const DialogsContainer = connect(MapStateToProps, {
  addMessage,
  updateMessageText,
})(Dialogs);

export default DialogsContainer;
