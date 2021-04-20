import React from "react";
import style from "./Header.module.css";

const Header = ({ login, isAuth }) => {
  return (
    <header className={style.header}>
      <img
        src="http://pngimg.com/uploads/letter_o/letter_o_PNG43.png"
        alt="logo"
      />
      <h1>TRAINING SOCIAL-NETWORK</h1>
      <div className={style.welcome}>
        {isAuth ? <h1>Welcome, {login}</h1> : <h1>LOGIN</h1>}
      </div>
    </header>
  );
};

export default Header;
