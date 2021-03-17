import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = ({addPost,currentPostText,updatePostText,postsData}) => {
  let postsArr = postsData.map((post) => (
    <Post key={post.id} message={post.message} likecount={post.likecount} />
  ));

  let newPost = React.createRef();
  
  let onAdd = () => {
    addPost();
  }

  let onUpdate = () => {
    let text = newPost.current.value;
    updatePostText(text);
  }

  return (
    <div className={style.myposts}>
      <h2>My Posts</h2>
      <textarea ref={newPost} onChange={onUpdate} value={currentPostText}/>
      <button onClick={onAdd}>send</button>
      {postsArr}
    </div>
  );
};

export default MyPosts;
