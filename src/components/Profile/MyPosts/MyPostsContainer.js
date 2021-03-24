import { connect } from "react-redux";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
  addLikeActionCreator,
  deletePostActionCreator,
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData,
    currentPostText: state.profileReducer.currentPostText,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      return dispatch(addPostActionCreator());
    },
    updatePostText: (text) => {
      return dispatch(updatePostTextActionCreator(text));
    },
    addLike: (id) => {
      return dispatch(addLikeActionCreator(id));
    },
    deletePost: (id) => {
      return dispatch(deletePostActionCreator(id));
    },
  };
};

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;
