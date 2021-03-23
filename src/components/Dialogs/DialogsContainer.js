import { connect } from "react-redux";
import {
  addNewMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const MapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsReducer.dialogsData,
    messagesData: state.dialogsReducer.messagesData,
    currentMessageText: state.dialogsReducer.currentMessageText,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      return dispatch(addNewMessageActionCreator());
    },
    updateMessageText: (text) => {
      return dispatch(updateMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogsContainer;
