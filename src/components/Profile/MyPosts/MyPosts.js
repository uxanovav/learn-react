import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import { updatePostTextActionCreator } from "../../../Redux/state";
import { addPostActionCreator } from './../../../Redux/state';

const MyPosts = ({postsData,currentPostText, dispatch}) => {
  debugger;
  let postsArr = postsData.map((post) => (
    <Post key={post.id} message={post.message} likecount={post.likecount} />
  ));

  let newPost = React.createRef();
  
  let add = () => {
    let newText = newPost.current.value
    dispatch(addPostActionCreator(newText));
    newPost.current.value = "";
  }

  let updatePostText = () => {
    let text = newPost.current.value
    dispatch(updatePostTextActionCreator(text));
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
