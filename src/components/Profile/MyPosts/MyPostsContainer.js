import React from "react";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../Redux/profile-reducer";
import StoreContext from "../../../storecontext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let postsData = store.getState().profileReducer.postsData;

        let currentPostText = store.getState().profileReducer.currentPostText;
        let addPost = () => {
          store.dispatch(addPostActionCreator(currentPostText));
        };

        let updatePostText = (text) => {
          store.dispatch(updatePostTextActionCreator(text));
        };

        return (
          <MyPosts
            addPost={addPost}
            currentPostText={currentPostText}
            updatePostText={updatePostText}
            postsData={postsData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
