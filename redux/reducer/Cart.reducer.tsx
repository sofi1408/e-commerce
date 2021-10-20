import CartItems from "../../components/CartItems/CartItems";
import actionTypes from "../actions.types";
import { ICartItem } from "../../pages/cart";

const initialState = {
  cartItems: [],
  totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case actionTypes.UPDATE_CART_COUNT:
      return {
        ...state,
        totalItems: state.cartItems.length,
      };
    case actionTypes.UPDATE_CART_QTY:
      const updatedItems = state.cartItems.map((item: ICartItem) => {
        if (item.name === action.payload.name) {
          if (!(action.payload.changeValue === -1 && item.quantity < 2)) {
            item.quantity = item.quantity + action.payload.changeValue;
            item.totalPrice = item.price * item.quantity;
          }
        }
        return item;
      });
      return {
        ...state,
        cartItems: [...updatedItems],
      };
    default:
      return state;
  }
};

export default cartReducer;
