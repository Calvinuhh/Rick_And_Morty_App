import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      // return {
      //   ...state,
      //   allCharacters: [...state.allCharacters, payload],
      //   myFavorites: [...state.myFavorites, payload],
      // };
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      // return {
      //   ...state,
      //   myFavorites: state.myFavorites.filter((item) => item.id !== payload),
      // };
      return { ...state, myFavorites: payload };

    case FILTER_CARDS:
      if (payload.toUpperCase() === "ALL") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      }
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (item) => item.gender.toUpperCase() === payload.toUpperCase()
        ),
      };

    case ORDER_CARDS:
      if (payload.toUpperCase() === "A") {
        return {
          ...state,

          myFavorites: state.allCharacters.sort((a, b) =>
            a.name > b.name ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) =>
            a.name < b.name ? 1 : -1
          ),
        };
      }

    default:
      return state;
  }
};

export default reducer;
