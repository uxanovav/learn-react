import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import style from  "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className = {style.nav}>
      <NavLink to="/profile" activeClassName={style.active}>
      <div className= {style.navbutton}>
        <h2>PROFILE</h2>
      </div>
      </NavLink>
      <NavLink to="/dialogs" activeClassName={style.active}>
      <div className= {style.navbutton}>
        <h2>MESSAGES</h2>
      </div>
      </NavLink>
      <NavLink to="/news" activeClassName={style.active} >
      <div className= {style.navbutton}>
        <h2>NEWS</h2>
      </div>
      </NavLink>
      <NavLink to="/music" activeClassName={style.active}>
      <div className= {style.navbutton}>
        <h2>MUSIC</h2>
      </div>
      </NavLink>
      <NavLink to="/settings" activeClassName={style.active}>
      <div className= {style.navbutton}>
        <h2>SETTINGS</h2>
      </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
