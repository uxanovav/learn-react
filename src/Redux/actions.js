import {
  ADD_POST,
  UPDATE_CURRENT_TEXT,
  ADD_LIKE,
  DELETE_POST,
  SET_PROFILE,
  ADD_NEW_MESSAGE,
  UPDATE_MESSAGE_TEXT,
  SET_AUTH,
} from "./types";

import { authAPI } from "../api/api";

export const profileActions = {
  addPost: () => {
    return { type: ADD_POST };
  },
  updatePostText: (payload) => {
    return { type: UPDATE_CURRENT_TEXT, payload };
  },
  addLike: (payload) => {
    return { type: ADD_LIKE, payload };
  },
  deletePost: (payload) => {
    return { type: DELETE_POST, payload };
  },
  setProfile: (payload) => {
    return { type: SET_PROFILE, payload };
  },
};

export const dialogActions = {
  addNewMessage: () => {
    return { type: ADD_NEW_MESSAGE };
  },
  updateMessageText: (payload) => {
    return { type: UPDATE_MESSAGE_TEXT, payload };
  },
};

export const authActions = {
  fetchAuth: () => {
    return (dispatch) => {
      authAPI.getAuth().then((response) => {
        dispatch({ type: SET_AUTH, authData: response.data.data });
      });
    };
  },
};
