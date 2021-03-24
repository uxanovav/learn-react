const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_TEXT = "UPDATE-CURRENT-TEXT";
const ADD_LIKE = "ADD_LIKE";
const DELETE_POST = "DELETE-POST";

let initialState = {
  postsData: [
    {
      id: 7,
      message: "Qui ut irure laboris cupidatat deserunt ea.",
      likecount: 21,
      liked: false,
    },
    {
      id: 6,
      message: "Nostrud consequat elit ullamco fugiat exercitation officia.",
      likecount: 2,
      liked: false,
    },
    {
      id: 5,
      message:
        "Commodo dolor cupidatat id ex non nulla do deserunt in cupidatat enim laboris ad sit.",
      likecount: 5,
      liked: true,
    },
    {
      id: 4,
      message: "Do id excepteur pariatur voluptate reprehenderit eu culpa ex.",
      likecount: 6,
      liked: true,
    },
    {
      id: 3,
      message: "Duis cupidatat proident irure cupidatat.",
      likecount: 7,
      liked: true,
    },
    {
      id: 2,
      message:
        "Minim occaecat dolore ad consectetur voluptate ex aliquip incididunt ullamco.",
      likecount: 12,
      liked: false,
    },
    {
      id: 1,
      message:
        "Sint non aute sit dolore ea dolore anim anim et exercitation laborum anim.",
      likecount: 55,
      liked: true,
    },
  ],
  currentPostText: "",
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postsData[0].id + 1,
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
      let changedPost = state.postsData.map((post) => {
        if (post.id === action.id) {
          if (post.liked === false) {
            post.likecount++;
          } else {
            post.likecount--;
          }
          post.liked = !post.liked;
        }
      });
      return {
        ...state,
        postsData: [...state.postsData],
      };
    }
    case DELETE_POST: {
      let newPostData = state.postsData.filter((el) => el.id != action.id);
      console.log(newPostData);
      return {
        ...state,
        postsData: newPostData,
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
