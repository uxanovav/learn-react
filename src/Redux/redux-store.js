import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  dialogsReducer,
  profileReducer,
  friendsReducer,
});

let store = createStore(reducers);
console.log(store);

export default store;
