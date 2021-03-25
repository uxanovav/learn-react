import React from "react";
import Friends from "../Friends";
import style from "./Friend.module.css";

const Friend = ({id,name,avatar}) => {
  return (
    <div className={style.friend} id={id}>
      {
        avatar === null?<img src={"https://lh3.googleusercontent.com/proxy/C9eKI38w8ZbdyeoItWLcabK9S4atftpMypAdO6tkK7xXnf_yz6wI-KrvOYinULpRlqEkWty8LUzNhH9L14eu8UiO1YlmO1nsaxAI99R9Txu8GhQNwh4rucLa-RbL0CnAszVqyya9GOjFUyryufJ3n_SZP1oVPNfyg3D1Y7NpONWM_AnZx4PZ6HAnNatUOIDTgMGrnQmOGQuLFsXAnKlF0HV4uIlHLWNfNbet_kZWr5JW4yypqV3YYIE"} alt={name}/>:<img src={avatar} alt="avatar"/> 
      }      
      <div className={style.friendName}>{name}</div>
    </div>
  );
};

export default Friend;
