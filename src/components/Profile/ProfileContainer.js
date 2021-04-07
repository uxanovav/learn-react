import { connect } from "react-redux";
import React from "react";
import {
  setIsFetchingActionCreator,
  setProfileActionCreator,
} from "../../Redux/profile-reducer";
import axios from "axios";
import Profile from "./Profile";

class ProfileContainerClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/16209`)
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }

  render() {
    return <Profile profileData={this.props.profileData} />;
  }
}

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
)(ProfileContainerClass);

export default ProfileContainer;
