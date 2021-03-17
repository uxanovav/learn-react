const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_TEXT = "UPDATE-CURRENT-TEXT";

export default function profileReducer(state, action) {
    if (action.type === ADD_POST){
        state.postsData.unshift({
          id: 5,
          message: action.newText,
          likecount: 0,
        });
      } else if (action.type === UPDATE_CURRENT_TEXT) {
        state.currentPostText = action.text;
      }
    return state;
}

export const addPostActionCreator = (text) =>{
    return {type: ADD_POST, newText: text}
  }
  
  export const updatePostTextActionCreator = (text) =>{
    return {type: UPDATE_CURRENT_TEXT, text: text}
  }