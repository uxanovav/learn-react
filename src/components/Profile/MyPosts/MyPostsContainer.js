import React from "react";
import { updatePostTextActionCreator, addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({postsData,currentPostText, dispatch}) => {

  let addPost = () => {
    dispatch(addPostActionCreator(currentPostText));
  }

  let updatePostText = (text) => {
    dispatch(updatePostTextActionCreator(text));
  }

  return (
    <MyPosts addPost={addPost} 
    currentPostText={currentPostText} 
    updatePostText ={updatePostText}
    postsData={postsData}/>
  );
};

export default MyPostsContainer;
