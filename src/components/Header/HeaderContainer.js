import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authActions } from "../../Redux/actions";
import Header from "./Header";

const HeaderContaner = ({ fetchAuth, login, isAuth }) => {
  useEffect(() => {
    fetchAuth();
  }, []);
  return <Header login={login} isAuth={isAuth} />;
};

const MapStateToProps = (state) => {
  return {
    login: state.authReducer.authData.login,
    isAuth: state.authReducer.isAuth,
  };
};

const fetchAuth = authActions.fetchAuth;

export default connect(MapStateToProps, { fetchAuth })(HeaderContaner);
