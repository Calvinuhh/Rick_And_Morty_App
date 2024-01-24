import { ADD_FAV, REMOVE_FAV } from "./action-types";

const addFav = (payload) => ({
  type: ADD_FAV,
  payload,
});

const removeFav = (payload) => ({
  type: REMOVE_FAV,
  payload,
});

export { addFav, removeFav };
