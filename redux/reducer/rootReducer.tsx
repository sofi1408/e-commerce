import { combineReducers } from "redux";
import searchReducer from "../reducer/Search.reducer";
import cartReducer from "../reducer/Cart.reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  cart: cartReducer,
});

export default rootReducer;
