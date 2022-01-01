import React from "react";
import cart from '../Home/cart.png'
import theImage from "../Home/logo.png";
import { Link } from "react-router-dom";
import image1 from '../Home/image1.png';
import '../Navbar/style.css' ;
import CartButton from './CartButton'
import CartIcon from "./CartIcon";

const Navbar = () => {

 const logout =()=>{
    localStorage.setItem("LoginData",null);
    window.location.href = '/Login';
}
    return (
        
           <div>
   <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#">
                <img src={theImage} alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item ml-3">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li> */}
                <li className="nav-item ml-3">
                <Link className="nav-link" to="/Products">Products</Link>
                  </li>
                <li className="nav-item ml-3">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link" to='/Contact'>Contact</Link>
                  </li>
                  {/* <li className="nav-item ml-3">
                    <Link className="nav-link" to="/Login">Login</Link>
                  </li> */}
                  {/* <li className="nav-item ml-3">
                    <Link className="nav-link" to="/Register">Register</Link>
                  </li> */}
                  <li className="nav-item ml-3">
                    <Link className="nav-link" onClick ={logout}>Logout</Link>
                  </li>
                  <Link className="nav-link" to="/details">
                  <CartButton />
                </Link>
              </ul>
            </div>
          </nav>
        </div>
        </div>
        

        
         


    )
}
export default Navbar