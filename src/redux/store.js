// store.js
import { createStore } from "redux";

const initialState = {
  username: "",
};

const SET_USERNAME = "SET_USERNAME";

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
