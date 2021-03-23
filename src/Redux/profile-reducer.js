const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_TEXT = "UPDATE-CURRENT-TEXT";

let initialState = {
  postsData: [
    {
      id: 1,
      message: "Qui ut irure laboris cupidatat deserunt ea.",
      likecount: 21,
    },
    {
      id: 2,
      message: "Nostrud consequat elit ullamco fugiat exercitation officia.",
      likecount: 2,
    },
    {
      id: 3,
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
      id: 5,
      message: "Duis cupidatat proident irure cupidatat.",
      likecount: 7,
    },
    {
      id: 6,
      message:
        "Minim occaecat dolore ad consectetur voluptate ex aliquip incididunt ullamco.",
      likecount: 12,
    },
    {
      id: 7,
      message:
        "Sint non aute sit dolore ea dolore anim anim et exercitation laborum anim.",
      likecount: 55,
    },
  ],
  currentPostText: "",
};

export default function profileReducer(state = initialState, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case ADD_POST: {
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.unshift({
        id: 5,
        message: stateCopy.currentPostText,
        likecount: 0,
      });
      stateCopy.currentPostText = "";
      return stateCopy;
    }

    case UPDATE_CURRENT_TEXT: {
      stateCopy.currentPostText = action.text;
      return stateCopy;
    }
    default: {
      return stateCopy;
    }
  }
}

export const addPostActionCreator = (text) => {
  return { type: ADD_POST, newText: text };
};

export const updatePostTextActionCreator = (text) => {
  return { type: UPDATE_CURRENT_TEXT, text: text };
};
