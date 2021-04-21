import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setAuthActionCreator } from "../../Redux/auth-reducer";
import Header from "./Header";
import axios from "axios";
import { authAPI } from "../../api/api";

const HeaderContaner = ({ setAuth, login, isAuth }) => {
  useEffect(() => {
    const authData = authAPI.getAuth().then((response) => {
      setAuth(response.data.data);
    });
  }, []);
  return <Header login={login} isAuth={isAuth} />;
};

const MapStateToProps = (state) => {
  return {
    login: state.authReducer.authData.login,
    isAuth: state.authReducer.isAuth,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    setAuth: (AuthData) => {
      return dispatch(setAuthActionCreator(AuthData));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(HeaderContaner);
