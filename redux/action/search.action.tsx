import actionTypes from "../actions.types";

export const searchAction = (products) => {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload: products,
  };
};

export const getProducts = () => {
  try {
    return async (dispatch) => {
      const prd = await fetch("https://fakestoreapi.com/products");
      const products = await prd.json();
      dispatch(searchAction(products));
    };
  } catch (error) {
    console.log(error);
  }
};
