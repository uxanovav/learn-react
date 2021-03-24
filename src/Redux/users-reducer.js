const FOLLOW = "FOLLOW";

let initialState = {
  usersData: [
    {
      id: 1,
      name: "Anna",
      avatar: "http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png",
      followed: true,
      location: {
        country: "Russia",
        city: "Ulyanovsk",
      },
    },
    {
      id: 2,
      name: "Sveta",
      avatar:
        "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/02/02852c0bce884b2cc1f09a8e8ae9f5abec15c3b5_full.jpg",
      followed: false,
      location: {
        country: "Russia",
        city: "Ulyanovsk",
      },
    },
    {
      id: 3,
      name: "Petr",
      avatar: "https://avatarfiles.alphacoders.com/276/thumb-276208.jpg",
      followed: false,
      location: {
        country: "Russia",
        city: "Ulyanovsk",
      },
    },
    {
      id: 4,
      name: "Sasha",
      avatar:
        "https://www.meme-arsenal.com/memes/04bcd7b319425e737c9df24fbab151fe.jpg",
      followed: true,
      location: {
        country: "Russia",
        city: "Ulyanovsk",
      },
    },
    {
      id: 5,
      name: "Sergey",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR65yg_goFcAga2IIAnSkV2s5B6-OuBcY3Rw&usqp=CAU",
      followed: false,
      location: {
        country: "Russia",
        city: "Ulyanovsk",
      },
    },

    {
      id: 6,
      name: "Artem",
      avatar:
        "https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg",
      followed: true,
      location: {
        country: "Russia",
        city: "Ulyanovsk",
      },
    },
  ],
};

export default function usersReducer(state = initialState, { type, id }) {
  switch (type) {
    case FOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === id) {
            user.followed = !user.followed;
          }
          return user;
        }),
      };
    }
    default:
      return state;
  }
}

export const userFollowActionCreator = (id) => {
  return { type: FOLLOW, id: id };
};
