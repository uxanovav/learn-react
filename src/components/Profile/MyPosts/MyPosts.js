import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = ({postsData, addPost, currentPostText, updateCurrentPostText}) => {
  let postsArr = postsData.map((post) => (
    <Post key={post.id} message={post.message} likecount={post.likecount} />
  ));

  console.log(addPost);
  let newPost = React.createRef();
  
  let add = () => {
    addPost(newPost.current.value);
    newPost.current.value = "";
    updateCurrentPostText("");
  }

  let updatePostText = () => {
    updateCurrentPostText(newPost.current.value);
  }

  return (
    <div className={style.myposts}>
      <h2>My Posts</h2>
      <textarea ref={newPost} onChange={updatePostText} value={currentPostText}/>
      <button onClick={add}>send</button>
      {postsArr}
    </div>
  );
};

export default MyPosts;
