import React from "react";
import CartItem from "../CartItem/CartItem";
import styles from "./CartItems.module.css";
import { ICartItem } from "../../pages/cart";
import { v4 as uuidv4 } from "uuid";

const CartItems = ({ items }) => {
  return (
    <ul className={styles.cartList}>
      {items.map((item: ICartItem) => {
        return (
          <CartItem
            key={uuidv4()}
            itemName={item.name}
            itemImg={item.image}
            price={item.totalPrice}
            desc={item.desc}
            quantity={item.quantity}
          />
        );
      })}
    </ul>
  );
};

export default CartItems;
