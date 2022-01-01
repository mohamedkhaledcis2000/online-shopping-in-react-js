import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
import "./UserForm.css";
// helpers Functions
const isEmpty = (value) => value.trim().length === 0;
const isEqualToFive = (value) => value.trim().length === 5;
const UserForm = () => {
  const cartCtx = useContext(CartContext);
  const [enteredName, setEnteredName] = useState("");
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredPostal, setEnteredPostal] = useState("");
  const [enteredCity, setEnteredCity] = useState("");

  const [formIsValidty, setFormIsValidty] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const changeNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const changeStreetHandler = (e) => {
    setEnteredStreet(e.target.value);
  };
  const changePostalHandler = (e) => {
    setEnteredPostal(e.target.value);
  };

  const changeCityHandler = (e) => {
    setEnteredCity(e.target.value);
  };

  const enteredNameIsValid = !isEmpty(enteredName);
  const enteredStreetIsValid = !isEmpty(enteredStreet);
  const enteredPostalIsValid = isEqualToFive(enteredPostal);
  const enteredCityIsValid = !isEmpty(enteredCity);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFormIsValidty({
  //       name: enteredNameIsValid,
  //       street: enteredStreetIsValid,
  //       postal: enteredPostalIsValid,
  //       city: enteredCityIsValid,
  //     });
  //   }, 1000);
  // }, [enteredName, enteredStreet, enteredPostal, enteredCity]);
  const submitHandler = (event) => {
    event.preventDefault();

    setFormIsValidty({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    // Send Data to Backend
    axios
      .post(`http://localhost:3000/orders`, {
        name: enteredName,
        street: enteredStreet,
        postal: enteredPostal,
        city: enteredCity,
      })
      .then((res) => {
        axios.get("http://localhost:3000/orders").then((res) => {
          alert("Product purchased");
        });
      });
  };

  return (
    <div class="purchase">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="purchaseform">
              <p class="textform">Purchase form</p>
              <form action="">
                <input
                  type="text"
                  placeholder="Name"
                  class="purinput"
                  onChange={changeNameHandler}
                />
                {!formIsValidty.name && (
                  <p className={formIsValidty.name ? "" : "invalid"}>
                    Please Enter A Valid Name
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Street"
                  class="purinput"
                  onChange={changeStreetHandler}
                />
                {!formIsValidty.street && (
                  <p className={formIsValidty.street ? "" : "invalid"}>
                    Please Enter A Valid Street
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Postal"
                  class="purinput"
                  onChange={changePostalHandler}
                />
                {!formIsValidty.postal && (
                  <p className={formIsValidty.postal ? "" : "invalid"}>
                    Postal Code Musn't Be Greater Or Less Than Five Numbers
                  </p>
                )}
                <input
                  type="text"
                  placeholder="City"
                  class="purinput"
                  onChange={changeCityHandler}
                />
                {!formIsValidty.city && (
                  <p className={formIsValidty.city ? "" : "invalid"}>
                    Please Enter A Valid City
                  </p>
                )}
                <Link class="btn btn-danger purbtn" to="/details">
                  cancel
                </Link>
                <button class="btn btn-danger purbtn " onClick={submitHandler}>
                  Purchase
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
