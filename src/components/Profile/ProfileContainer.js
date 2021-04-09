import { connect } from "react-redux";
import React, { useEffect } from "react";
import { setProfileActionCreator } from "../../Redux/profile-reducer";
import axios from "axios";
import Profile from "./Profile";

const ProfileContainerC = ({ setProfile, profileData }) => {
  const renderProfile = (profileData) => {
    return <Profile profileData={profileData} />;
  };
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/16209`)
      .then((response) => {
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

const ProfileContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(ProfileContainerC);

export default ProfileContainer;
