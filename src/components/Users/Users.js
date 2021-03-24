import React from "react";
import User from "./User/User";

const Users = ({ usersData, userFollowing }) => {
  debugger;
  let usersArr = usersData.map((user) => {
    return (
      <User
        name={user.name}
        avatar={user.avatar}
        followed={user.followed}
        location={user.location}
        userFollowing={userFollowing}
        id={user.id}
      />
    );
  });

  return <div>{usersArr}</div>;
};

export default Users;
