import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setAuthActionCreator } from "../../Redux/auth-reducer";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";

const HeaderContaner = (state) => {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.data) {
          debugger;
          state.setAuth(response.data.data);
        }
      });
  }, []);
  return <Header authData={state.authDate} />;
};

const MapStateToProps = (state) => {
  return {
    authDate: state.authReducer.authData,
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
