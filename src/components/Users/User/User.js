import React from "react";
import { NavLink } from "react-router-dom";
import style from "./User.module.css";

const User = ({
  name,
  followed,
  userFollowing,
  userUnFollowing,
  id,
  avatar,
}) => {
  return (
    <div className={style.userboard}>
      <NavLink to={"profile/16209"}>
        {avatar === null ? (
          <img
            src={
              "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            }
            alt={name}
          />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
      </NavLink>
      <NavLink to={"profile/" + id}>
        <div className={style.name}>{name}</div>
      </NavLink>
      <div>{/* <div>{location.city}</div>
        {location.country} */}</div>
      {followed ? (
        <button onClick={() => userUnFollowing(id)}>-</button>
      ) : (
        <button onClick={() => userFollowing(id)}>+</button>
      )}
    </div>
  );
};

export default User;
