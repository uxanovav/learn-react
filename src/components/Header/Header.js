import React from "react";
import style from "./Header.module.css";

const Header = (props) => {
  debugger;
  return (
    <header className={style.header}>
      <img
        src="http://pngimg.com/uploads/letter_o/letter_o_PNG43.png"
        alt="logo"
      />
      <h1>TRAINING SOCIAL-NETWORK</h1>
      {props.authData.isAuth ? (
        <h3>Welcome, {props.authData.login}</h3>
      ) : (
        <h3>LOGIN</h3>
      )}
    </header>
  );
};

export default Header;
