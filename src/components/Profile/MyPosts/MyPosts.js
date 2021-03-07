import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsArr = props.postsData.map((post) => (
    <Post key={post.id} message={post.message} likecount={post.likecount} />
  ));

  console.log(props.addPost);
  let newPost = React.createRef();
  
  let addPost = () => {
    props.addPost(newPost.current.value);
    newPost.current.value = "";
    props.updateCurrentPostText("");
  }

  let updatePostText = () => {
    props.updateCurrentPostText(newPost.current.value);
  }

  return (
    <div className={style.myposts}>
      <h2>My Posts</h2>
      <textarea ref={newPost} onChange={updatePostText} value={props.currentPostText}/>
      <button onClick={addPost}>send</button>
      {postsArr}
    </div>
  );
};

export default MyPosts;
