import actionTypes from "../actions.types";

const initialState = {
  products: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default searchReducer;
