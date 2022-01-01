import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from '../store/cart-context';
import "./CartDetails.css";
import CartItem from "../Cart/CartItem";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

const getOfProducts = JSON.parse(localStorage.getItem("products"));

const CartDetails = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.products);
  const [products, setProducts] = useState(cartCtx.products);
  const TotalAmount = `$${cartCtx.totalAmount}`;
  /*useEffect(() => {
    setProducts(getOfProducts);
  }, [products]);*/
  const addProductToCartHandler = (product) => {
    cartCtx.addProduct({ ...product, amount: 1 });
  };
  const removeProductFromCartHandler = (id) => {
    cartCtx.removeProduct(id);
  };
  if (products.length === 0) {
    return (
      <div className="message">
        No Products Found Please Add Products To Cart
      </div>
    );
  } else {
    return (
      <React.Fragment>
      <Navbar />
        <div class="ourcard">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartCtx.products.map((product, index) => {
                      return (
                        <CartItem
                          img={product.img}
                          key={product.id}
                          product={product}
                          index={index + 1}
                          title={product.title}
                          amount={product.amount}
                          price={product.price}
                          onAdd={() => addProductToCartHandler(product)}
                          onRemove={() =>
                            removeProductFromCartHandler(product.id)
                          }
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="container">
            <div class="row">
              <div class="offset-7 col-5 col-sm-5 offset-sm-7 offset-lg-7 col-lg-5 offset-md-7 col-md-5">
                <div class="subtotal">
                  <div class="row">
                    <div class="col-sm-5 col-6 col-lg-4 col-md-4">
                      <p>Total</p>
                    </div>
                    <div class="col-sm-3 col-6 offset-sm-4 offset-lg-4 col-lg-4 offset-md-4 col-md-4">
                      <p>{TotalAmount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link className="purchase-btn" to="/userform">
              Add Purchase
            </Link>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
};
export default CartDetails;
