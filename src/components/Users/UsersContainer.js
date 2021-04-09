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
import { useEffect } from "react";

const UsersContainerC = ({
  setIsFetching,
  currentPage,
  totalCount,
  setPage,
  usersData,
  userFollowing,
  userUnFollowing,
  setUsers,
  isFetching,
}) => {
  debugger;

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=50`
      )
      .then((response) => {
        setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
        setIsFetching(false);
      });
  }, []);

  const getNewUsers = (pageNumber) => {
    setIsFetching(true);
    setPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=50`
      )
      .then((response) => {
        setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
        setIsFetching(false);
      });
  };

  const renderUsers = (
    currentPage,
    totalCount,
    usersData,
    userFollowing,
    userUnFollowing,
    getNewUsers,
    isFetching
  ) => {
    return (
      <>
        {isFetching ? (
          <div className={style.preloaderbox}>
            <img src={preloader} alt="preloader" />
          </div>
        ) : (
          <Users
            currentPage={currentPage}
            totalCount={totalCount}
            usersData={usersData}
            userFollowing={userFollowing}
            userUnFollowing={userUnFollowing}
            getNewUsers={getNewUsers}
          />
        )}
      </>
    );
  };

  return renderUsers(
    currentPage,
    totalCount,
    usersData,
    userFollowing,
    userUnFollowing,
    getNewUsers,
    isFetching
  );
};

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
)(UsersContainerC);

export default UsersContainer;
