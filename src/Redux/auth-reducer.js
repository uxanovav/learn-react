const SET_AUTH = "SET-AUTH";

let initialState = {
  authData: {
    id: null,
    login: null,
    email: null,
  },
  isAuth: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        authData: action.authData,
        isAuth: true,
      };
    default: {
      return state;
    }
  }
}

export const setAuthActionCreator = (AuthData) => {
  return { type: SET_AUTH, authData: AuthData };
};
