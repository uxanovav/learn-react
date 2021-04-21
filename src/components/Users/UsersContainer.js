import { connect } from "react-redux";
import Users from "./Users";
import {
  setUsersActionCreator,
  userFollowActionCreator,
  userUnFollowActionCreator,
  setCurrentPageActionCreator,
  setIsFetchingActionCreator,
  setFollowingActionCreator,
} from "../../Redux/users-reducer";
import React from "react";
import preloader from "../../assets/images/preloader.gif";
import style from "./Users.module.css";
import { useEffect } from "react";
import { userAPI } from "../../api/api";

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
  setIsFollowing,
  isFollowing,
}) => {
  useEffect(() => {
    setIsFetching(true);
    userAPI.getUsers(currentPage).then((response) => {
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
    userAPI.getNewUsersPage(pageNumber).then((response) => {
      setUsers({
        users: response.data.items,
        totalCount: response.data.totalCount,
      });
      setIsFetching(false);
    });
  };

  const followUser = (id) => {
    setIsFollowing(true, id);
    userAPI.setFollow(id).then((response) => {
      if (response.data.resultCode == 0) {
        userFollowing(id);
      }
      setIsFollowing(false, id);
    });
  };

  const unfollowUser = (id) => {
    setIsFollowing(true, id);
    userAPI.unsetFollow(id).then((response) => {
      if (response.data.resultCode == 0) {
        userUnFollowing(id);
      }
      setIsFollowing(false, id);
    });
  };

  const renderUsers = (
    currentPage,
    totalCount,
    usersData,
    followUser,
    unfollowUser,
    getNewUsers,
    isFetching,
    isFollowing
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
            followUser={followUser}
            unfollowUser={unfollowUser}
            getNewUsers={getNewUsers}
            isFollowing={isFollowing}
          />
        )}
      </>
    );
  };

  return renderUsers(
    currentPage,
    totalCount,
    usersData,
    followUser,
    unfollowUser,
    getNewUsers,
    isFetching,
    isFollowing
  );
};

const MapStateToProps = (state) => {
  return {
    usersData: state.usersReducer.usersData,
    totalCount: state.usersReducer.totalCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    isFollowing: state.usersReducer.isFollowing,
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
    setIsFollowing: (isFetching, id) => {
      return dispatch(setFollowingActionCreator(isFetching, id));
    },
  };
};

const UsersContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(UsersContainerC);

export default UsersContainer;
