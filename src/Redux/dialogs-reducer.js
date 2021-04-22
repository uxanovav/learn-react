import { ADD_NEW_MESSAGE, UPDATE_MESSAGE_TEXT } from "./types";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Anna",
      avatar: "http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png",
    },
    {
      id: 2,
      name: "Sveta",
      avatar: "http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png",
    },
    {
      id: 3,
      name: "Artem",
      avatar: "http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png",
    },
    {
      id: 4,
      name: "Vlad",
      avatar: "http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png",
    },
    {
      id: 5,
      name: "Sasha",
      avatar: "http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png",
    },
  ],

  messagesData: [
    {
      sender: 1,
      message: "Nisi veniam reprehenderit nisi duis.",
    },
    {
      sender: 2,
      message:
        "Aute qui dolor consectetur cillum cillum ex esse labore nisi dolore deserunt ex.",
    },
    {
      sender: 1,
      message: "Ut minim cillum excepteur minim.",
    },
    {
      sender: 2,
      message:
        "Dolore laborum reprehenderit laborum anim et aliqua esse et dolor sunt esse excepteur.",
    },
    {
      sender: 1,
      message: "Aute ea dolor qui esse ex pariatur voluptate cillum.",
    },
    {
      sender: 2,
      message: "Est consequat mollit dolore eu.",
    },
    {
      sender: 1,
      message: "Amet culpa sunt amet non non excepteur officia.",
    },
    {
      sender: 1,
      message:
        "Amet reprehenderit minim fugiat velit labore mollit aute ullamco voluptate cupidatat laboris non proident enim.",
    },
  ],
  currentMessageText: "",
};

export default function dialogsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ADD_NEW_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { sender: 1, message: state.currentMessageText },
        ],
        currentMessageText: "",
      };
    }
    case UPDATE_MESSAGE_TEXT: {
      return {
        ...state,
        currentMessageText: payload,
      };
    }
    default: {
      return state;
    }
  }
}
