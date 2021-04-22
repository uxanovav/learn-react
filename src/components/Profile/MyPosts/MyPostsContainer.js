import { connect } from "react-redux";
import { profileActions } from "../../../Redux/actions";
import MyPosts from "./MyPosts";

const MapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData,
    currentPostText: state.profileReducer.currentPostText,
  };
};

const addPost = profileActions.addPost;
const updatePostText = profileActions.updatePostText;
const addLike = profileActions.addLike;
const deletePost = profileActions.deletePost;

const MyPostsContainer = connect(MapStateToProps, {
  addPost,
  updatePostText,
  addLike,
  deletePost,
})(MyPosts);

export default MyPostsContainer;
