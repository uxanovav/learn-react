import React, { useState } from "react";
import style from "./Description.module.css";

const ProfileStatus = ({ status }) => {
  const [profileStatus, setPrfileStatus] = useState(status);
  const [editMode, changeEditMode] = useState(false);
  return (
    <div className={style.profilestatus}>
      {!editMode ? (
        <span
          onDoubleClick={(e) => {
            changeEditMode(!editMode);
          }}
        >
          {profileStatus}
        </span>
      ) : (
        <>
          <input
            value={profileStatus}
            onChange={(e) => {
              setPrfileStatus(e.target.value);
            }}
            onBlur={() => {
              changeEditMode(!editMode);
            }}
          ></input>
        </>
      )}
    </div>
  );
};

export default ProfileStatus;
