const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_TEXT = "UPDATE-CURRENT-TEXT";

let initialState = {
  postsData: [
    {
      id: 7,
      message: "Qui ut irure laboris cupidatat deserunt ea.",
      likecount: 21,
    },
    {
      id: 6,
      message: "Nostrud consequat elit ullamco fugiat exercitation officia.",
      likecount: 2,
    },
    {
      id: 5,
      message:
        "Commodo dolor cupidatat id ex non nulla do deserunt in cupidatat enim laboris ad sit.",
      likecount: 5,
    },
    {
      id: 4,
      message: "Do id excepteur pariatur voluptate reprehenderit eu culpa ex.",
      likecount: 6,
    },
    {
      id: 3,
      message: "Duis cupidatat proident irure cupidatat.",
      likecount: 7,
    },
    {
      id: 2,
      message:
        "Minim occaecat dolore ad consectetur voluptate ex aliquip incididunt ullamco.",
      likecount: 12,
    },
    {
      id: 1,
      message:
        "Sint non aute sit dolore ea dolore anim anim et exercitation laborum anim.",
      likecount: 55,
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
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        currentPostText: "",
      };
    }

    case UPDATE_CURRENT_TEXT: {
      return{
        ...state,
        currentPostText: action.text
      }
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
