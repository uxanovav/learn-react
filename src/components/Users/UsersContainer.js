import { connect } from "react-redux";
import Users from "./Users";
import {
  setUsersActionCreator,
  userFollowActionCreator,
  userUnFollowActionCreator,
  setCurrentPageActionCreator,
  setIsFetchingActionCreator,
} from "../../Redux/users-reducer";
import React from "react";
import axios from "axios";
import preloader from "../../assets/images/preloader.gif";
import style from "./Users.module.css";

class UsersContainerClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=50`
      )
      .then((response) => {
        this.props.setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
        this.props.setIsFetching(false);
      });
  }

  getNewUsers = (pageNumber) => {
    this.props.setIsFetching(true);
    this.props.setPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=50`
      )
      .then((response) => {
        this.props.setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
        this.props.setIsFetching(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div className={style.preloaderbox}>
            <img src={preloader} alt="preloader" />
          </div>
        ) : (
          <Users
            currentPage={this.props.currentPage}
            totalCount={this.props.totalCount}
            usersData={this.props.usersData}
            userFollowing={this.props.userFollowing}
            userUnFollowing={this.props.userUnFollowing}
            getNewUsers={this.getNewUsers}
          />
        )}
      </>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    usersData: state.usersReducer.usersData,
    totalCount: state.usersReducer.totalCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
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
    setIsFetching: (isFetching) => {
      return dispatch(setIsFetchingActionCreator(isFetching));
    },
  };
};

const UsersContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(UsersContainerClass);

export default UsersContainer;
