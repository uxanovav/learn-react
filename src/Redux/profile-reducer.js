const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_TEXT = "UPDATE-CURRENT-TEXT";
const ADD_LIKE = "ADD_LIKE";
const DELETE_POST = "DELETE-POST";
const SET_PROFILE = "SET-PROFILE";

let initialState = {
  profileData: {},
  isFetching: false,
  postsData: [],
  currentPostText: "",
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postsData.length != 0 ? state.postsData[0].id + 1 : 0,
        message: state.currentPostText,
        likecount: 0,
        liked: false,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        currentPostText: "",
      };
    }

    case UPDATE_CURRENT_TEXT: {
      return {
        ...state,
        currentPostText: action.text,
      };
    }

    case ADD_LIKE: {
      return {
        ...state,
        postsData: state.postsData.map((post) => {
          if (post.id === action.id) {
            if (post.liked === false) {
              post.likecount++;
            } else {
              post.likecount--;
            }
            post.liked = !post.liked;
          }
          return post;
        }),
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id != action.id),
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profileData: action.profileData,
      };
    }
    default: {
      return state;
    }
  }
}

export const addPostActionCreator = (text) => {
  return { type: ADD_POST, newText: text };
};

export const updatePostTextActionCreator = (text) => {
  return { type: UPDATE_CURRENT_TEXT, text: text };
};

export const addLikeActionCreator = (id) => {
  return { type: ADD_LIKE, id: id };
};

export const deletePostActionCreator = (id) => {
  return { type: DELETE_POST, id: id };
};

export const setProfileActionCreator = (profileData) => {
  return { type: SET_PROFILE, profileData: profileData };
};
