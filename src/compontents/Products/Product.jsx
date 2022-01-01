import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import Navbar from "../Navbar/index";
import Footer from "../Footer";
const Product = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const filterProducts = () => {
    return props.products.find((product) => product.id === props.id);
  };

  return (
    <React.Fragment>


      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="product">
          <Link
            to={{
              key: props.id,
              pathname: "/productDetails",
              onFilterProducts: filterProducts,
            }}
          >
            <img src={props.img} alt="no thing" className="img-fluid" />
          </Link>
          <h5>{props.title}</h5>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <p>{price}</p>
        </div>
      </div>


    </React.Fragment>
  );

};

export default Product;
