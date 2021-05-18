import { connect } from "react-redux";
import React, { useEffect } from "react";
import { profileActions } from "../../Redux/actions";
import Profile from "./Profile";
import { withRouter } from "react-router";
import RedirectWithoutAuth from "../hoc/RedirectWithoutAuth";

const ProfileContainer = ({
  setProfile,
  setStatus,
  isFetching,
  profileData,
  match,
  authId,
  profileStatus,
}) => {
  const isMyPage = authId === profileData.userId;

  const renderProfile = (profileData, profileStatus, isFetching, setStatus) => {
    return (
      <Profile
        profileData={profileData}
        profileStatus={profileStatus}
        isFetching={isFetching}
        setStatus={setStatus}
        isMyPage={isMyPage}
      />
    );
  };
  useEffect(() => {
    match.path === "/me" ? setProfile(authId) : setProfile(match.params.userId);
  }, []);
  return renderProfile(profileData, profileStatus, isFetching, setStatus);
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
const setStatus = profileActions.setStatus;

const AuthRedirectComponent = RedirectWithoutAuth(ProfileContainer);

let urlData = withRouter(AuthRedirectComponent);

export default connect(MapStateToProps, { setProfile, setStatus })(urlData);
