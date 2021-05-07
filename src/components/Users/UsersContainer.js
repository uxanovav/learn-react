import { connect } from "react-redux";
import { usersActions } from "../../Redux/actions";
import Users from "./Users";
import React from "react";
import preloader from "../../assets/images/preloader.gif";
import style from "./Users.module.css";
import { useEffect } from "react";
import { userAPI } from "../../api/api";
import { Redirect } from "react-router";

const UsersContainerC = ({
  userFollowing,
  userUnFollowing,
  setUsers,
  getNewUsers,
  currentPage,
  totalCount,
  usersData,
  isFetching,
  isFollowing,
  isAuth,
}) => {
  useEffect(() => {
    setUsers(currentPage);
  }, []);

  const renderUsers = (
    currentPage,
    totalCount,
    usersData,
    userFollowing,
    userUnFollowing,
    getNewUsers,
    isFetching,
    isFollowing,
    isAuth
  ) => {
    return isAuth ? (
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
            followUser={userFollowing}
            unfollowUser={userUnFollowing}
            getNewUsers={getNewUsers}
            isFollowing={isFollowing}
          />
        )}
      </>
    ) : (
      <Redirect to="/login" />
    );
  };

  return renderUsers(
    currentPage,
    totalCount,
    usersData,
    userFollowing,
    userUnFollowing,
    getNewUsers,
    isFetching,
    isFollowing,
    isAuth
  );
};

const MapStateToProps = (state) => {
  return {
    usersData: state.usersReducer.usersData,
    totalCount: state.usersReducer.totalCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    isFollowing: state.usersReducer.isFollowing,
    isAuth: state.authReducer.isAuth,
  };
};

const userFollowing = usersActions.userFollowing;
const userUnFollowing = usersActions.userUnFollowing;
const setUsers = usersActions.setUsers;
const getNewUsers = usersActions.getNewUsers;

const UsersContainer = connect(MapStateToProps, {
  userFollowing,
  userUnFollowing,
  setUsers,
  getNewUsers,
})(UsersContainerC);

export default UsersContainer;
