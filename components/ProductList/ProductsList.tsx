import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action/search.action";
import ProductListRow from "../ProductListRow/ProductListRow";

const ProductsList = () => {
  const dispatch = useDispatch();
  const [productListArray, setProductListArray] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productsFromState = useSelector((state: { search }) => state.search);
  useEffect(() => {
    const productsArray = [...Object.values(productsFromState)];
    const productRowsArray = [];
    while (productsArray.length > 0) {
      productRowsArray.push([...productsArray.slice(0, 4)]);
      productsArray.splice(0, 4);
    }
    setProductListArray(productRowsArray);
  }, [productsFromState]);

  return productListArray && productListArray.length > 0 ? (
    <div>
      {productListArray.map((productList, idx) => (
        <ProductListRow key={idx} products={productList} />
      ))}
    </div>
  ) : null;
};

export default ProductsList;
