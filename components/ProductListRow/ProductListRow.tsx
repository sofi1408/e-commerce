import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductListRow.module.css";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isAvailable: true;
}

const ProductListRow = ({ products }) => {
  return (
    <ul className={styles.productRow}>
      {products.map((product: IProduct) => {
        return (
          product.price && (
            <ProductCard
              key={product.id}
              imageUrl={product.image}
              title={product.title}
              price={product.price}
              desc={product.description}
            />
          )
        );
      })}
    </ul>
  );
};

export default ProductListRow;
