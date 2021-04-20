import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  dialogsReducer,
  profileReducer,
  usersReducer,
  authReducer,
});

let store = createStore(reducers);

export default store;
