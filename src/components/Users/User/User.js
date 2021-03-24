import React from "react";
import style from "./User.module.css";

const User = ({ name, avatar, followed, location, userFollowing, id }) => {
  return (
    <div className={style.userboard}>
      <img src={avatar} alt={name} />
      <div className={style.name}>{name}</div>
      <div>
        <div>{location.city}</div>
        {location.country}
      </div>
      {followed ? (
        <button onClick={() => userFollowing(id)}>-</button>
      ) : (
        <button onClick={() => userFollowing(id)}>+</button>
      )}
    </div>
  );
};

export default User;
