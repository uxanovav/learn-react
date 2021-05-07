import React from "react";
import { Redirect } from "react-router";

const RedirectWithoutAuth = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth) {
        return <Component {...this.props} />;
      }
      return <Redirect to="/login" />;
    }
  }
  return RedirectComponent;
};

export default RedirectWithoutAuth;
