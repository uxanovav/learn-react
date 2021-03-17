import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "Qui ut irure laboris cupidatat deserunt ea.",
          likecount: 21,
        },
        {
          id: 2,
          message:
            "Nostrud consequat elit ullamco fugiat exercitation officia.",
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
          message:
            "Do id excepteur pariatur voluptate reprehenderit eu culpa ex.",
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
    },
    dialogsPage: {
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
    },
    friendsPage: {
      friendsData: [
        {
          id:1,
          name:"Anna",
          avatar:"http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png"
        },
        {
          id:2,
          name:"Sveta",
          avatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/02/02852c0bce884b2cc1f09a8e8ae9f5abec15c3b5_full.jpg"
        },
        {
          id:3,
          name:"Petr",
          avatar:"https://avatarfiles.alphacoders.com/276/thumb-276208.jpg"
        },
        {
          id:4,
          name:"Sasha",
          avatar:"https://www.meme-arsenal.com/memes/04bcd7b319425e737c9df24fbab151fe.jpg"
        },
        {
          id:5,
          name:"Sergey",
          avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR65yg_goFcAga2IIAnSkV2s5B6-OuBcY3Rw&usqp=CAU"
        },
        {
          id:6,
          name:"Artem",
          avatar:"https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg"
        }
      ]
    }
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
    this.rerender(this.getState(),this.dispatch.bind(store));
  },
  rerender() {},
  subscriber(observer) {
    this.rerender = observer;
  },
};

export default store;
