import { connect } from "react-redux";
import React, { useEffect } from "react";
import { profileActions } from "../../Redux/actions";
import Profile from "./Profile";
import { Redirect, withRouter } from "react-router";
import { authAPI, profileAPI } from "../../api/api";
import RedirectWithoutAuth from "../hoc/RedirectWithoutAuth";

const ProfileContainer = ({
  setProfile,
  isAuth,
  isFetching,
  profileData,
  match,
  authId,
  profileStatus,
}) => {
  const renderProfile = (profileData, profileStatus, isFetching) => {
    return (
      <Profile
        profileData={profileData}
        profileStatus={profileStatus}
        isFetching={isFetching}
      />
    );
  };
  useEffect(() => {
    match.path === "/me" ? setProfile(authId) : setProfile(match.params.userId);
  }, []);
  return renderProfile(profileData, profileStatus, isFetching);
};

const MapStateToProps = (state) => {
  return {
    profileData: state.profileReducer.profileData,
    isFetching: state.usersReducer.isFetching,
    isAuth: state.authReducer.isAuth,
    authId: state.authReducer.authData.id,
    profileStatus: state.profileReducer.status,
  };
};

const setProfile = profileActions.setProfile;

const AuthRedirectComponent = RedirectWithoutAuth(ProfileContainer);

let urlData = withRouter(AuthRedirectComponent);

export default connect(MapStateToProps, { setProfile })(urlData);
