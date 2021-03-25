const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";

let initialState = {
  usersData: [],
  totalCount: "",
  currentPage: 1,
};

export default function usersReducer(
  state = initialState,
  { type, id, users, totalCountOfUsers, currentPage }
) {
  switch (type) {
    case FOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === id) {
            user.followed = true;
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === id) {
            user.followed = false;
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        usersData: users,
        totalCount: totalCountOfUsers,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: currentPage,
      };
    }
    default:
      return state;
  }
}

export const userFollowActionCreator = (id) => {
  return { type: FOLLOW, id: id };
};

export const userUnFollowActionCreator = (id) => {
  return { type: UNFOLLOW, id: id };
};

export const setUsersActionCreator = (payload) => {
  return {
    type: SET_USERS,
    users: payload.users,
    totalCountOfUsers: payload.totalCount,
  };
};

export const setCurrentPageActionCreator = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};
