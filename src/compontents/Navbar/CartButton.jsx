import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
import CartIcon from "./CartIcon";
const getOfProducts = JSON.parse(localStorage.getItem("products"));
const CartButton = () => {
  const [products, setProducts] = useState([]);
  const cartCtx = useContext(CartContext);
  /*useEffect(() => {
    setProducts(getOfProducts);
  }, [products]);*/
  const numberOfCartItems = cartCtx.products.reduce((curNum, product) => {
    return curNum + product.amount;
  }, 0);

  return (
    <Link to="/details" className="">
      <span>
        <CartIcon />
      </span>
      <span className="badge bg-danger">{numberOfCartItems}</span>
    </Link>
  );
};
export default CartButton;
