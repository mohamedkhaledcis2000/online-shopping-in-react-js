import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer/index";
import Navbar from "../Navbar/index";

import CartContext from "../store/cart-context";
import "./productDetails.css";
const ProductDetails = (props) => {
  const [product, setProduct] = useState();

  const [addNewProduct, setNewProduct] = useState();
  const [enteredAmount, setEnteredAmount] = useState("1");
  const cartCtx = useContext(CartContext);

  const changeAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const clickHandler = () => {
    const amountNumber = +enteredAmount;
    const newProduct = {
      id: product.id,
      title: product.title,
      amount: amountNumber,
      price: product.price,
      img: product.img,
    };
    cartCtx.addProduct(newProduct);
    /*axios.post("http://localhost:3000/product", newProduct).then((res) => {
      axios.get("http://localhost:3000/product").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          setNewProduct(res[i].data);
        }
        cartCtx.addProduct(addNewProduct);
      });
    });*/
  };

  useEffect(() => {
    setProduct(props.location.onFilterProducts());
  }, []);

  if (product === undefined) {
    return (
      <div class="spinner-border" role="status" className="loading">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div>
      <Navbar />
      <div class="ourgalary">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-12">
              <div class="galaryimage">
                <img
                  src={product.img}
                  alt="no images"
                  class="img-fluid"
                  id="mainImage"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-12">
              <div class="galarydetails">
                <h1>{product.title}</h1>
                <h4>{`$${product.price.toFixed(2)}`}</h4>
                <h3>
                  product details <i class="fa fa-indent"></i>
                </h3>
                <br />
                <p>{product.description}</p>
                <input
                  id={`amount_${product.id}`}
                  type="number"
                  class="num"
                  defaultValue="1"
                  type="number"
                  min="1"
                  max="5"
                  step="1"
                  value={enteredAmount}
                  onChange={changeAmountHandler}
                />

                <a
                  href="#"
                  onClick={clickHandler}
                  class="btn btn-danger btncard"
                >
                  Add To Card
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
};
export default ProductDetails;
