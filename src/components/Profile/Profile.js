import React from "react";
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css"

const Profile = (props) => {
  debugger;
  return (
    <div>
      <div className = {style.main_image}><img src="https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/></div>
      <Description />
      <MyPosts postsData={props.state.postsData}/>
    </div>
  );
};

export default Profile;