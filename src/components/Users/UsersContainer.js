import { connect } from "react-redux";
import Users from "./Users";
import {
  setUsersActionCreator,
  userFollowActionCreator,
  userUnFollowActionCreator,
  setCurrentPageActionCreator,
} from "../../Redux/users-reducer";
import React from "react";
import axios from "axios";

class UsersContainerClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=5`
      )
      .then((response) => {
        this.props.setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
      });
  }

  getNewUsers = (pageNumber) => {
    this.props.setPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=5`
      )
      .then((response) => {
        this.props.setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
      });
  };

  render() {
    return (
      <Users
        currentPage={this.props.currentPage}
        totalCount={this.props.totalCount}
        usersData={this.props.usersData}
        userFollowing={this.props.userFollowing}
        userUnFollowing={this.props.userUnFollowing}
        getNewUsers={this.getNewUsers}
      />
    );
  }
}

const MapStateToProps = (state) => {
  return {
    usersData: state.usersReducer.usersData,
    totalCount: state.usersReducer.totalCount,
    currentPage: state.usersReducer.currentPage,
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
    setPage: (currentPage) => {
      return dispatch(setCurrentPageActionCreator(currentPage));
    },
  };
};

const UsersContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(UsersContainerClass);

export default UsersContainer;
