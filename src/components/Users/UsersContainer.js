import { connect } from "react-redux";
import Users from "./Users";
import { userFollowActionCreator } from "../../Redux/users-reducer";

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
  };
};

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);

export default UsersContainer;
