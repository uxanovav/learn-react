import React from "react";
import style from "./Description.module.css";
import ProfileStatus from "./ProfileStatus";

const Description = ({ avatar, name, profileStatus }) => {
  debugger;
  return (
    <div className={style.description}>
      <>
        {avatar.large ? (
          <img src={avatar.large} alt="avatar" />
        ) : (
          <img
            src="http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png"
            alt="avatar"
          />
        )}
      </>
      <div className="textContent">
        <h1>{name}</h1>
        <ProfileStatus profileStatus={profileStatus} />
        <div>
          Anim veniam voluptate ea sint labore et consectetur cillum non labore
          consectetur est non.
        </div>
      </div>
    </div>
  );
};

export default Description;
