import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My Posts</div>
      <textarea></textarea>
      <button>send</button>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  );
};

export default MyPosts;
