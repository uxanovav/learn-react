import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
      <NavLink to={"/dialogs/"+props.id} activeClassName={style.active}>
        <div className={style.dialogItem}>{props.name}</div>
      </NavLink>
  );
};

export default DialogItem;
