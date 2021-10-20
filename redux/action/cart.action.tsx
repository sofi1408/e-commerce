import actionTypes from "../actions.types";
import { ICartItem } from "../../pages/cart";

export const cartAction = (cartItems: ICartItem[]) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: cartItems,
  };
};

export const cartCountAction = () => {
  return {
    type: actionTypes.UPDATE_CART_COUNT,
  };
};

export const cartQtyAction = (name, changeValue) => {
  return {
    type: actionTypes.UPDATE_CART_QTY,
    payload: { name, changeValue },
  };
};

export const updateCart = (cartItems: ICartItem[]) => {
  try {
    return (dispatch) => {
      dispatch(cartAction(cartItems));
      dispatch(cartCountAction());
    };
  } catch (error) {
    console.log("add to cart failed...");
    console.log(error);
  }
};

export const updateCartQty = (name: String, changeVal: Number) => {
  console.log("inside update cart qty");
  try {
    return (dispatch) => {
      dispatch(cartQtyAction(name, changeVal));
    };
  } catch (error) {
    console.log("unable to update cart Qty...");
    console.log(error);
  }
};
