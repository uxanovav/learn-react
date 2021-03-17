const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export default function dialogsReducer(state, action) {
  if (action.type === ADD_NEW_MESSAGE) {
    state.messagesData.push({
      sender: 1,
      message: action.text,
    });
  } else if (action.type === UPDATE_MESSAGE_TEXT) {
    state.currentMessageText = action.text;
  }
  return state;
}

export const addNewMessageActionCreator = (text) =>{
    return {type: ADD_NEW_MESSAGE, text: text}
  }
  
export const updateMessageTextActionCreator = (text) => {
    return {type: UPDATE_MESSAGE_TEXT, text: text}
  }