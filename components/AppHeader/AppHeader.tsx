import React from "react";
import styles from "./AppHeader.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/Always_open.jpg";
import Image from "next/image";
import Link from "next/link";
import { getCookies } from "../ProductCard/ProductCard";
import { updateCart } from "../../redux/action/cart.action";

const AppHeader = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state: { cart }) => state.cart);
  const cartItems = getCookies("cart");
  if (
    cartItems &&
    JSON.parse(cartItems).length > 0 &&
    cartState.totalItems === 0
  ) {
    dispatch(updateCart(JSON.parse(cartItems)));
  }

  return (
    <div className={styles.appHeader}>
      <div className={styles.appLogo}>
        <Link href="/">
          <Image
            src={Logo}
            alt="logo-image"
            className={styles.logo}
            height="60"
            width="100"
          />
        </Link>
      </div>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search for..." />
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className={styles.cart}>
        <Link href="/cart">
          <FontAwesomeIcon
            icon={faShoppingBasket}
            color="#fff"
            width="100px"
            size="2x"
          />
        </Link>
        {cartState.totalItems > 0 && (
          <span className={styles.cartCount}>{cartState.totalItems}</span>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
