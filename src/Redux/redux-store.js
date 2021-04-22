import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

let reducers = combineReducers({
  dialogsReducer,
  profileReducer,
  usersReducer,
  authReducer,
});

let store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
