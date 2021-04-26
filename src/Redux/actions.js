import {
  ADD_POST,
  UPDATE_CURRENT_TEXT,
  ADD_LIKE,
  DELETE_POST,
  SET_PROFILE,
  ADD_NEW_MESSAGE,
  UPDATE_MESSAGE_TEXT,
  SET_AUTH,
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_IS_FETCHING,
  SET_IS_FOLLOWING,
} from "./types";

import { authAPI, userAPI } from "../api/api";

export const usersActions = {
  userFollowing: (id) => {
    return (dispatch) => {
      dispatch({ type: SET_IS_FOLLOWING, isFollowing: true, userId: id });
      userAPI.setFollow(id).then((response) => {
        if (response.data.resultCode == 0) {
          dispatch({ type: FOLLOW, id });
        }
        dispatch({ type: SET_IS_FOLLOWING, isFollowing: false, userId: id });
      });
    };
  },
  userUnFollowing: (id) => {
    return (dispatch) => {
      dispatch({ type: SET_IS_FOLLOWING, isFollowing: true, userId: id });
      userAPI.unsetFollow(id).then((response) => {
        if (response.data.resultCode == 0) {
          dispatch({ type: UNFOLLOW, id });
        }
        dispatch({ type: SET_IS_FOLLOWING, isFollowing: false, userId: id });
      });
    };
  },
  setUsers: (currentPage) => {
    return (dispatch) => {
      dispatch({ type: SET_IS_FETCHING, isFetching: true });
      userAPI.getUsers(currentPage).then((response) => {
        dispatch({
          type: SET_USERS,
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
        dispatch({ type: SET_IS_FETCHING, isFetching: false });
      });
    };
  },
  getNewUsers: (pagreNumber) => {
    return (dispatch) => {
      dispatch({ type: SET_IS_FETCHING, isFetching: true });
      dispatch({ type: SET_CURRENT_PAGE, pagreNumber });
      userAPI.getUsers(pagreNumber).then((response) => {
        dispatch({
          type: SET_USERS,
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
        dispatch({ type: SET_IS_FETCHING, isFetching: false });
      });
    };
  },
};

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
