import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setAuthActionCreator } from "../../Redux/auth-reducer";
import Header from "./Header";
import axios from "axios";

const HeaderContaner = ({ setAuth, login, isAuth }) => {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.data) {
          setAuth(response.data.data);
        }
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
