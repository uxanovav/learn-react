import React from "react";
import StoreContext from "../../storecontext";
import Friend from "./Friend/Friend";
import style from "./Friends.module.css";

const Friends = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let friendsArr = store.getState().friendsReducer.friendsData.map(
          (friend) => (
            <Friend id={friend.id} name={friend.name} avatar={friend.avatar} />
          )
        );
        return (
          <div className={style.friendsPanel}>
            <div className={style.header}>
              <h2>Friends</h2>
            </div>
            <div className={style.friendsList}>{friendsArr}</div>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Friends;
