import React from "react";
import Description from "./Description/Description";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import preloader from "../../assets/images/preloader.gif";

const Profile = ({
  profileData,
  profileStatus,
  isFetching,
  setStatus,
  isMyPage,
}) => {
  if (isFetching || !profileData.photos) {
    return (
      <div className={style.preloaderbox}>
        <img src={preloader} alt="preloader" />
      </div>
    );
  } else {
    return (
      <div>
        <div className={style.main_image}>
          <img src="https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <Description
          name={profileData.fullName}
          avatar={profileData.photos}
          profileStatus={profileStatus}
          setStatus={setStatus}
          isMyPage={isMyPage}
        />
        <MyPostsContainer />
      </div>
    );
  }
};

export default Profile;
