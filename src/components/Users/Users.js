import React from "react";
import User from "./User/User";
import style from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / 50);
  const setNextPage = () => {
    if (props.currentPage < pagesCount) {
      props.getNewUsers(props.currentPage + 1);
    }
  };

  const setPervousPage = () => {
    if (props.currentPage != 1) props.getNewUsers(props.currentPage - 1);
  };
  return (
    <div>
      <div className={style.navigation}>
        <span className={style.navbutton} onClick={() => setPervousPage()}>
          &lt;&lt;&lt;
        </span>
        <span>{props.currentPage}</span>
        <span className={style.navbutton} onClick={() => setNextPage()}>
          &gt;&gt;&gt;
        </span>
      </div>
      <div>
        {props.usersData.map((user) => {
          return (
            <User
              key={user.id}
              name={user.name}
              followed={user.followed}
              followUser={props.followUser}
              unfollowUser={props.unfollowUser}
              id={user.id}
              avatar={user.photos.small}
            />
          );
        })}
      </div>
      <div className={style.navigation}>
        <span className={style.navbutton} onClick={() => setPervousPage()}>
          &lt;&lt;&lt;
        </span>
        <span>{props.currentPage}</span>
        <span className={style.navbutton} onClick={() => setNextPage()}>
          &gt;&gt;&gt;
        </span>
      </div>
    </div>
  );
};

export default Users;
