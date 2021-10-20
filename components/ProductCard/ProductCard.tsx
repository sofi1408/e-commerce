import React from "react";
import { useDispatch } from "react-redux";
import styles from "./ProductCard.module.css";
import { updateCart, updateCartQty } from "../../redux/action/cart.action";

export const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const getCookies = (name: string) => {
  let nameEq = name + "=";
  let ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEq) == 0) return c.substring(nameEq.length, c.length);
  }
};

const ProductCard = ({ imageUrl, title, price, desc }) => {
  const dispatch = useDispatch();

  const onAddHandler = () => {
    const cart = getCookies("cart");
    const cartItem = {
      name: title,
      image: imageUrl,
      price,
      totalPrice: price,
      desc,
      quantity: 1,
    };
    if (!cart) {
      setCookie("cart", JSON.stringify([cartItem]), 999999);
    } else {
      const updatedCart = [...JSON.parse(cart), cartItem];
      setCookie("cart", JSON.stringify(updatedCart), 999999);
    }
    dispatch(updateCart(JSON.parse(getCookies("cart"))));
    dispatch(updateCartQty(cartItem.name, 1));
  };

  return (
    <li className={styles.productCard}>
      <img src={imageUrl} alt="product-card-image" />
      <div className={styles.productDetails}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{`$${price}`}</div>
      </div>
      <div>
        <button className={styles.addToCart} onClick={onAddHandler}>
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
