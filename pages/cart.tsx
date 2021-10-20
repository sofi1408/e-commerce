import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "../components/CartItems/CartItems";
import { updateCart } from "../redux/action/cart.action";
import { getCookies } from "../components/ProductCard/ProductCard";

export interface ICartItem {
  name: string;
  image: string;
  totalPrice: number;
  price: number;
  desc: string;
  quantity: number;
}

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state: { cart }) => state.cart);
  useEffect(() => {
    if (
      cartItems &&
      JSON.parse(cartItems).length > 0 &&
      cartState.totalItems === 0
    ) {
      dispatch(updateCart(JSON.parse(cartItems)));
    }
  }, [cartItems, cartState]);
  const cartTotal = "(" + cartState.totalItems + ")";
  return (
    <div className="CartPage">
      <div className="CartWrapper">
        <div className="cartHeading">
          My Cart <span className="total">{cartTotal}</span>
        </div>
        <CartItems items={cartState.cartItems} />
      </div>
    </div>
  );
};

Cart.getInitialProps = async ({ req, res }) => {
  let cartItems;
  if (req && req.headers) {
    cartItems = req.cookies.cart;
  } else {
    cartItems = getCookies("cart");
  }
  return {
    cartItems,
  };
};

export default Cart;
