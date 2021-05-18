import React, { useState } from "react";
import style from "./Description.module.css";

const ProfileStatus = ({ profileStatus }) => {
  const [status, setPrfileStatus] = useState(profileStatus);
  const [editMode, changeEditMode] = useState(false);
  return (
    <div className={style.profilestatus}>
      {!editMode ? (
        <span
          onDoubleClick={(e) => {
            changeEditMode(!editMode);
          }}
        >
          {status}
        </span>
      ) : (
        <>
          <input
            value={status}
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
