import {
  ADD_POST,
  UPDATE_CURRENT_TEXT,
  ADD_LIKE,
  DELETE_POST,
  SET_PROFILE,
  GET_STATUS,
  SET_IS_FETCHING,
} from "./types";

let initialState = {
  profileData: {},
  postsData: [],
  currentPostText: "",
  status: "default",
};

export default function profileReducer(
  state = initialState,
  { type, payload, isFetching }
) {
  switch (type) {
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
        currentPostText: payload,
      };
    }

    case ADD_LIKE: {
      return {
        ...state,
        postsData: state.postsData.map((post) => {
          if (post.id === payload) {
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
        postsData: state.postsData.filter((post) => post.id != payload),
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profileData: payload,
      };
    }
    case GET_STATUS: {
      return {
        ...state,
        status: payload,
      };
    }
    default: {
      return state;
    }
  }
}
