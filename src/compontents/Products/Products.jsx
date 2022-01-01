import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.css";
import Product from "./Product.jsx";
import "./Products.css";
import Navbar from "../Navbar/index";
import Footer from "../Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  if (products.length === 0) {
    return (
      <div class="spinner-border" role="status" className="loading">
        <span class="sr-only">Loading...</span>
      </div>

    );
  } else {
    return (
      <div>
      <Navbar />
      <div className="otherfeatute">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                img={product.img}
                products={products}
              />
            ))}
          </div>
        </div>
      </div>

      
      </div>
    );
  }
};
export default Products;
