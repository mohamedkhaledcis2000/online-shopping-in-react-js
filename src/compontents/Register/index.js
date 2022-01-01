import React ,{Component} from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import axios from "axios";
import theImage from "../Home/logo.png";
import { Link } from "react-router-dom";
import cart from "../Home/cart.png"
import image1 from '../Home/image1.png';
import '../Register/style.css'
class Register extends Component{


  state ={
    Username :"",
    Password :"",
    Email:"",
    Phone:""
}

saveReg = ()=>{
    let newMem ={
        "username":this.state.Username,
        "password":this.state.Password,
        "email":this.state.Email,
        "phone":this.state.Phone
    }
     axios.post("http://localhost:3000/Register",newMem).then(res => {
        console.log(res.data);
        this.props.history.push("/Login");

    })
}


  render(){

    return (



        <div>


        {/*navbar */}

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
                  <li className="nav-item ml-3">
                    <Link className="nav-link" to="/Login">Login</Link>
                  </li>
                  <img src={cart} alt="" />
              </ul>
            </div>
          </nav>
        </div>
        </div>

{/* endnav */}


            
        
        <div class="login">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div>
                  <img src={image1} alt="no images" class="img-fluid"/>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="loginform">
                  <p>New account ?</p>
                  <hr/>
                  <form action="home.html">
                    <input type="text" placeholder="UserName" class="forminput" value={this.state.Username} onChange={
                    (e) => this.setState({
                        Username: e.target.value
                    })}/>
                    <input type="password" placeholder="password" class="forminput" value={this.state.Password} onChange={
                    (e) => this.setState({
                        Password: e.target.value
                    })}/>
                    <input type="email" placeholder="Email" class="forminput" value={this.state.Email} onChange={
                    (e) => this.setState({
                        Email: e.target.value
                    })}/>
                    <input type="tel" placeholder="phone number" class="forminput" value={this.state.Phone} onChange={
                    (e) => this.setState({
                        Phone: e.target.value
                    })}/>
                    <button class="btn btn-danger loginbtn" onClick={this.saveReg}> Register</button>
                 
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        
        </div>
    )
}
}
export default Register