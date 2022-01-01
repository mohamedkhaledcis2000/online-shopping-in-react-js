import React from "react";

const CartContext = React.createContext({
  products: [],
  totalAmount: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
  addProduct: (product) => {},
  removeProduct: (id) => {},
  filterProducts: (product) => {},
});
export default CartContext;
