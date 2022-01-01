import React,{Component} from "react";
import '../Login/style.css'
import cart from '../Home/cart.png'
import Register from "../Register/index";
import theImage from "../Home/logo.png";
import image1 from '../Home/image1.png';
import { Link } from "react-router-dom";
import RouterApp from "../../Route";

// import Register from "../Register";
class Login extends Component {

  state = {
    userName :'',
    passWord :'',
    user:'',
    pass:''
}


saveLogin = () => {
  //savedata inside Localstorage
  let LoginDataObject = {
      userName: this.state.userName,
      password: this.state.passWord

  }

  window.localStorage.setItem("LoginData",JSON.stringify(LoginDataObject));
  this.props.history.push("/")
}

render(){

    return (
<div>
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
                  <Link className="nav-link" to="/Register">Register</Link>
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
                  <p>Login</p>
                  <hr/>
                  <form action="home.html">
                    <input type="text" placeholder="UserName" class="forminput" value={this.state.userName} onChange={
                        (e) => this.setState({
                            userName: e.target.value
                        })}/>
                    <input type="password" placeholder="password" class="forminput" value={this.state.passWord} onChange={
                        (e) => this.setState({
                            passWord: e.target.value
                        })}/>
                    <button class="btn btn-danger loginbtn"  onClick={this.saveLogin}> Login</button>
                    <a href="#">Forget Password</a>

                        <Link to ="/Register">Register</Link>

                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

            
        </div>

        </div>
    )
}
}
export default Login