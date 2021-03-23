import {connect} from "react-redux";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData,
    currentPostText: state.profileReducer.currentPostText
    }
  }

const MapDispatchToProps = (dispatch) => {
  return {
    addPost: ()=> {
      return dispatch(addPostActionCreator());
    },
    updatePostText: (text)=> {
      return dispatch(updatePostTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;
