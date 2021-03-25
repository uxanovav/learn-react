import React from "react";
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
      {avatar === null ? (
        <img
          src={
            "https://lh3.googleusercontent.com/proxy/C9eKI38w8ZbdyeoItWLcabK9S4atftpMypAdO6tkK7xXnf_yz6wI-KrvOYinULpRlqEkWty8LUzNhH9L14eu8UiO1YlmO1nsaxAI99R9Txu8GhQNwh4rucLa-RbL0CnAszVqyya9GOjFUyryufJ3n_SZP1oVPNfyg3D1Y7NpONWM_AnZx4PZ6HAnNatUOIDTgMGrnQmOGQuLFsXAnKlF0HV4uIlHLWNfNbet_kZWr5JW4yypqV3YYIE"
          }
          alt={name}
        />
      ) : (
        <img src={avatar} alt="avatar" />
      )}
      <div className={style.name}>{name}</div>
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
