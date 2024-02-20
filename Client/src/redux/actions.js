import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./types";
import axios from "axios";

// const addFav = (payload) => ({
//   type: ADD_FAV,
//   payload,
// });

const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";

  return async (dispatch) => {
    const data = await axios.post(endpoint, character);
    return dispatch({
      type: ADD_FAV,
      payload: data,
    });
  };
};

// const removeFav = (payload) => ({
//   type: REMOVE_FAV,
//   payload,
// });

const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const data = await axios.delete(endpoint);
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    });
  };
};

const filterCards = (gender) => ({
  type: FILTER_CARDS,
  payload: gender,
});

const orderCards = (order) => ({
  type: ORDER_CARDS,
  payload: order,
});

export { addFav, removeFav, filterCards, orderCards };
