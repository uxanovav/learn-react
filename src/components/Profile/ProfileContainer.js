import { connect } from "react-redux";
import React, { useEffect } from "react";
import { setProfileActionCreator } from "../../Redux/profile-reducer";
import axios from "axios";
import Profile from "./Profile";
import { withRouter } from "react-router";
import { profileAPI } from "../../api/api";

const ProfileContainer = ({ setProfile, profileData, match }) => {
  const renderProfile = (profileData) => {
    return <Profile profileData={profileData} />;
  };
  useEffect(() => {
    profileAPI.getProfile(match.params.userId).then((response) => {
      setProfile(response.data);
    });
  }, []);

  return renderProfile(profileData);
};

const MapStateToProps = (state) => {
  return {
    profileData: state.profileReducer.profileData,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    setProfile: (profileData) => {
      return dispatch(setProfileActionCreator(profileData));
    },
  };
};

let urlData = withRouter(ProfileContainer);

export default connect(MapStateToProps, MapDispatchToProps)(urlData);
