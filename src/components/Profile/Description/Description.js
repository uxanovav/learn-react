import React from "react";
import style from "./Description.module.css";

const Description = () => {
  return (
    <div className={style.description}>
      <img
        src="http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png"
        alt="avatar"
      />
      <div className="textContent">
        <h1>Your Name</h1>
        <div>Anim veniam voluptate ea sint labore et consectetur cillum non labore consectetur est non.</div>
      </div>
    </div>
  );
};

export default Description;
