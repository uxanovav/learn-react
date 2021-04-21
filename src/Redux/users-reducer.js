const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_IS_FETCHING = "SET-IS-FETCHING";
const SET_IS_FOLLOWING = "SET-IS-FOLLOWING";

let initialState = {
  usersData: [],
  totalCount: "",
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
};

export default function usersReducer(
  state = initialState,
  { type, id, users, totalCountOfUsers, currentPage, isFetching, userId }
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
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: isFetching,
      };
    }
    case SET_IS_FOLLOWING: {
      return {
        ...state,
        isFollowing: isFetching
          ? [...state.isFollowing, userId]
          : state.isFollowing.filter((userId) => userId != userId),
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

export const setIsFetchingActionCreator = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching: isFetching,
  };
};

export const setFollowingActionCreator = (isFetching, userId) => {
  return {
    type: SET_IS_FOLLOWING,
    isFetching: isFetching,
    userId: userId,
  };
};
