import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsArr = props.postsData.map((post) => (
    <Post key={post.id} message={post.message} likecount={post.likecount} />
  ));

  return (
    <div className={style.myposts}>
      <h2>My Posts</h2>
      <textarea></textarea>
      <button>send</button>
      {postsArr}
    </div>
  );
};

export default MyPosts;
