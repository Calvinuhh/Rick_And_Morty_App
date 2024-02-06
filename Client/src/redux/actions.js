import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./types";

const addFav = (payload) => ({
  type: ADD_FAV,
  payload,
});

const removeFav = (payload) => ({
  type: REMOVE_FAV,
  payload,
});

const filterCards = (gender) => ({
  type: FILTER_CARDS,
  payload: gender,
});

const orderCards = (order) => ({
  type: ORDER_CARDS,
  payload: order,
});

export { addFav, removeFav, filterCards, orderCards };
