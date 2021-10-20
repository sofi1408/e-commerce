import React from "react";
import { useDispatch } from "react-redux";
import { updateCartQty } from "../../redux/action/cart.action";
import styles from "./CartItem.module.css";

const CartItem = ({ itemName, itemImg, price, desc, quantity }) => {
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(updateCartQty(itemName, 1));
  };
  const decrementCount = () => {
    dispatch(updateCartQty(itemName, -1));
  };
  return (
    <div className={styles.cartItem}>
      <div className={styles.itemDetails}>
        <div className={styles.itemImage}>
          <img src={itemImg} alt="cart-item-image" />
        </div>
        <div className={styles.itemData}>
          <div className={styles.title}>{itemName}</div>
          <div className={styles.desc}>{desc}</div>
          <div className={styles.price}>{`$${price}`}</div>
        </div>
      </div>

      <div className={styles.itemActions}>
        <div className={styles.itemCounterWrapper}>
          <div className={styles.itemCounter}>
            <button
              type="button"
              className={styles.btn}
              onClick={decrementCount}
            >
              -
            </button>
            <span className={styles.itemCount}>{quantity}</span>
            <button
              type="button"
              className={styles.btn}
              onClick={incrementCount}
            >
              +
            </button>
          </div>
        </div>

        <div className={styles.savenremove}>
          <div className={styles.save}>SAVE FOR LATER</div>
          <div className={styles.remove}>REMOVE</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
