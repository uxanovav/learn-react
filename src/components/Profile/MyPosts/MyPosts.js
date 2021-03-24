import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = ({
  postsData,
  addPost,
  updatePostText,
  currentPostText,
  addLike,
  deletePost,
}) => {
  let onAdd = () => {
    addPost();
  };

  let onUpdate = () => {
    let text = newPost.current.value;
    updatePostText(text);
  };

  let postsArr = postsData.map((post) => (
    <Post
      id={post.id}
      key={post.id}
      message={post.message}
      likecount={post.likecount}
      addLike={addLike}
      deletePost={deletePost}
      isLiked={post.liked}
    />
  ));
  let newPost = React.createRef();

  return (
    <div className={style.myposts}>
      <h2>My Posts</h2>
      <textarea ref={newPost} onChange={onUpdate} value={currentPostText} />
      <button onClick={onAdd}>send</button>
      {postsArr}
    </div>
  );
};

export default MyPosts;
