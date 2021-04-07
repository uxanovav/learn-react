import { connect } from "react-redux";
import React from "react";
import {
  setIsFetchingActionCreator,
  setProfileActionCreator,
} from "../../Redux/profile-reducer";
import preloader from "../../assets/images/preloader.gif";
import axios from "axios";
import Profile from "./Profile";

class ProfileContainerClass extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/16209`)
      .then((response) => {
        console.log(response.data);
        this.props.setProfile(response.data);
        this.props.setIsFetching(false);
      });
  }
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div>
            <img src={preloader} alt="preloader" />
          </div>
        ) : (
          <Profile
            name={this.props.profileData.fullName}
            avatar={this.props.profileData.photos}
          />
        )}
      </>
    );
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
    setIsFetching: (isFetching) => {
      return dispatch(setIsFetchingActionCreator(isFetching));
    },
  };
};

const ProfileContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(ProfileContainerClass);

export default ProfileContainer;
