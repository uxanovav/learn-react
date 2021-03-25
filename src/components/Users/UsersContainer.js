import { connect } from "react-redux";
import Users from "./Users";
import {
  setUsersActionCreator,
  userFollowActionCreator,
  userUnFollowActionCreator,
} from "../../Redux/users-reducer";

const MapStateToProps = (state) => {
  return {
    usersData: state.usersReducer.usersData,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    userFollowing: (id) => {
      return dispatch(userFollowActionCreator(id));
    },
    userUnFollowing: (id) => {
      return dispatch(userUnFollowActionCreator(id));
    },
    setUsers: (users) => {
      return dispatch(setUsersActionCreator(users));
    },
  };
};

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);

export default UsersContainer;
