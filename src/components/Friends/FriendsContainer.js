import { connect } from "react-redux";

import Friends from "./Friends";

const MapStateToProps = (state) => {
  return {
    userData: state.usersReducer.usersData.filter((user) => user.followed),
  };
};

const FriendsContainer = connect(MapStateToProps)(Friends);

export default FriendsContainer;
