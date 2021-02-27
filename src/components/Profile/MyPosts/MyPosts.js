import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My Posts</div>
      <textarea></textarea>
      <button>send</button>
      <Post message="Hi, how are you?" likecount="5"/>
      <Post message="It's my first post" likecount = "12"/>
    </div>
  );
};

export default MyPosts;
