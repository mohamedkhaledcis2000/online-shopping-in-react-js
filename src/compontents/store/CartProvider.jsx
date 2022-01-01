import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  products: [],
  totalAmount: 0,
 
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updateSubTotal;
    const updateTotalAmount =
      state.totalAmount + action.product.price * action.product.amount;


    const existingCartIndex = state.products.findIndex(
      (product) => product.id === action.product.id
    );
    console.log(existingCartIndex);
    let existingCartProduct = state.products[existingCartIndex];
    console.log(existingCartProduct);
    //existingCartProduct.price_All = action.product.price;
    let updateProducts;
    if (existingCartProduct) {
      const updataProduct = {
        ...action.product,
        amount: existingCartProduct.amount + action.product.amount,
        priceAll: existingCartProduct.price + action.product.price,
      };
      updateProducts = [...state.products];
      updateProducts[existingCartIndex] = updataProduct;

    } else {
      updateProducts = state.products.concat(action.product);
      updateSubTotal =
        state.totalAmount + action.product.price * action.product.amount;
    }

    return {
      totalAmount: updateTotalAmount,
      products: updateProducts,

    };
  }

  let updateProducts;
  if (action.type === "REMOVE") {
    const existingCartIndex = state.products.findIndex(
      (product) => product.id === action.id
    );

    const existingProduct = state.products[existingCartIndex];
    const updateTotalAmount = state.totalAmount - existingProduct.price;
    //updateProducts=[...state.products];
    if (existingProduct.amount === 1) {
      updateProducts = state.products.filter(
        (product) => product.id !== action.id
      );
    } else {
      const updataProduct = {
        ...existingProduct,
        amount: existingProduct.amount - 1,
      };
      updateProducts = [...state.products];
      updateProducts[existingCartIndex] = updataProduct;
    }

    return {
      totalAmount: updateTotalAmount,
      products: updateProducts,
    };
  }
}

const CartProvider = (props) => {
  const [cartState, dispatchProduct] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addProductToCartHandler = (product) => {
    dispatchProduct({ type: "ADD", product: product });
  };

  const removeProductFromCartHandler = (id) => {
    dispatchProduct({ type: "REMOVE", id: id });
  };


  const cartContext = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addProduct: addProductToCartHandler,
    removeProduct: removeProductFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
