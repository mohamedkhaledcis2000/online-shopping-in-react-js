import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import "./CartItem.css";
const CartItem = (props) => {
  const price = `$${props.price}`;
  const cartCtx = useContext(CartContext);

  const filterProductsHandler = (product) => {
    cartCtx.filterProducts(product);
  };
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.index}</th>
        <td class="tbodytr">
          <img src={props.img} alt="no images" class="cardimg" />
          <div class="tr1">
            <p>{props.title}</p>
            <button className="btn btn-outline-danger" onClick={props.onRemove}>
              -
            </button>
            <button
              className="btn btn-outline-danger btn-add"
              onClick={props.onAdd}
            >
              +
            </button>
          </div>
        </td>
        <td>
          <div>
            <span className="amount">x{props.amount}</span>
          </div>
        </td>
        <td>
          <div class="trprice">
            <h4>{price}</h4>
          </div>
        </td>
      </tr>
      {/*<li className="list-group-item">
        <div className="cart-item">
          <div>
            <h2 className="title">{props.title}</h2>
            <div>
              <span className="price">{price}</span>
              <span className="amount">x{props.amount}</span>
            </div>
          </div>
          <div class="buttons">
            <button
              onClick={props.onAdd}
              className="btn-add btn btn-outline-success"
            >
              +
            </button>
            <button
              onClick={props.onRemove}
              className="btn-remove btn btn-outline-danger"
            >
              -
            </button>
          </div>
        </div>
  </li>*/}
    </React.Fragment>
  );
};
export default CartItem;
