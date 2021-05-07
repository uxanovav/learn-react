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
  profileData,
  match,
  authId,
}) => {
  const renderProfile = (profileData) => {
    return <Profile profileData={profileData} />;
  };
  useEffect(() => {
    debugger;
    match.path === "/me"
      ? profileAPI.getProfile(authId).then((response) => {
          setProfile(response.data);
        })
      : profileAPI.getProfile(match.params.userId).then((response) => {
          setProfile(response.data);
        });
  }, []);

  return renderProfile(profileData, isAuth);
};

const MapStateToProps = (state) => {
  return {
    profileData: state.profileReducer.profileData,
    isAuth: state.authReducer.isAuth,
    authId: state.authReducer.authData.id,
  };
};

const setProfile = profileActions.setProfile;

const AuthRedirectComponent = RedirectWithoutAuth(ProfileContainer);

let urlData = withRouter(AuthRedirectComponent);

export default connect(MapStateToProps, { setProfile })(urlData);
