import { connect } from "react-redux";
import React, { useEffect } from "react";
import { profileActions } from "../../Redux/actions";
import Profile from "./Profile";
import { Redirect, withRouter } from "react-router";
import { profileAPI } from "../../api/api";

const ProfileContainer = ({ setProfile, isAuth, profileData, match }) => {
  const renderProfile = (profileData, isAuth) => {
    return isAuth ? (
      <Profile profileData={profileData} />
    ) : (
      <Redirect to="/login" />
    );
  };
  useEffect(() => {
    profileAPI.getProfile(match.params.userId).then((response) => {
      setProfile(response.data);
    });
  }, []);

  return renderProfile(profileData, isAuth);
};

const MapStateToProps = (state) => {
  return {
    profileData: state.profileReducer.profileData,
    isAuth: state.authReducer.isAuth,
  };
};

const setProfile = profileActions.setProfile;

let urlData = withRouter(ProfileContainer);

export default connect(MapStateToProps, { setProfile })(urlData);
