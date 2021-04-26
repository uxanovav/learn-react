import React from "react";
import { NavLink } from "react-router-dom";
import style from "./User.module.css";

const User = ({
  name,
  followed,
  followUser,
  unfollowUser,
  id,
  avatar,
  isFollowing,
}) => {
  debugger;
  return (
    <div className={style.userboard}>
      <NavLink to={"profile/" + id}>
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
        <button
          disabled={isFollowing.some((userId) => userId === id)}
          onClick={() => unfollowUser(id)}
        >
          -
        </button>
      ) : (
        <button
          disabled={isFollowing.some((userId) => userId === id)}
          onClick={() => followUser(id)}
        >
          +
        </button>
      )}
    </div>
  );
};

export default User;
