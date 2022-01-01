import React ,{Component} from "react";
import axios from "axios";
import cart from './cart.png'
import theImage from "./logo.png";
import image1 from './image1.png';
import cater from './category-1.jpg';
import cater2 from './category-2.jpg';
import cater3 from './category-3.jpg';
import pro1 from './product-1.jpg';
import pro2 from './product-2.jpg';
import pro3 from './product-3.jpg';
import pro4 from './product-4.jpg';
import pro5 from './product-5.jpg';
import pro6 from './product-6.jpg';
import pro7 from './product-7.jpg';
import pro8 from './product-8.jpg';
import pro9 from './product-9.jpg';
import pro10 from './product-10.jpg';
import pro11 from './product-11.jpg';
import pro12 from './product-12.jpg';
import exc from './exclusive.png';
import user1 from './user-1.png';
import user2 from './user-2.png';
import user3 from './user-3.png';
import caca from "./logo-coca-cola.png";
import logo from "./logo-godrej.png";
import logooppo from "./logo-oppo.png";
import logopay from "./logo-paypal.png";
import logoph from "./logo-philips.png";
import Appstore from "./app-store.png";
import playstore from "./play-store.png";
import logowhite from "./logo-white.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar  from "../Navbar";



class Home extends Component{
  componentWillMount() {
    let LoginObject = JSON.parse(localStorage.getItem("LoginData"));

    axios.get("http://localhost:3000/Register").then(user=>{
        if(LoginObject == null){
            this.props.history.push("/");
        }
        
        for(let i = 0 ; i<5; i++){
             if(user.data[i].username !== LoginObject.userName || user.data[i].password !== LoginObject.password){
                this.props.history.push("/Login");
                return;
                }
            else if(user.data[i].username === LoginObject.userName && user.data[i].password === LoginObject.password){
            // window.localStorage.setItem("LoginData", JSON.stringify(LoginDataObject));
             this.props.history.push("/");
             return;
            }
        }
         console.log(user.data)

     })
   





    //values
}
  render(){
    return (
      <div>


     <Navbar />
        
         
         
          <div className= 'yourwork'>
            <div className="container">
          <div className="row">
              <div className=" col-sm-12 col-md-6 col-lg-6">
                  <div className="workone">
                    <h1>Give Your Workout <br/>A New Style!</h1>
                    <p>Success isnt always about greatness. Its about consistency.    
                         <br/> Consistent hard work gains success.Greatness will come.</p>
                  <button type="button" className="btn btn-danger"><Link to="/Login">Explore Now</Link>&#8594;</button>
                  </div>
                  
              </div>
              <div className=" col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <img src={image1} alt="no image" className="img-fluid"/>
                  </div>
              </div>
          </div>
        </div>
    </div>
    













{/* <div className="inform">
  <div className="container">
    <div className="row">
    <div className="col-sm-12 col-md-4 col-lg-4">
      <div className="mt-5 lastinform" >
        <p><i className="fas fa-quote-left"></i></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
          . Ab suscipit tempore neque asperiores. Esse, fugiat expedita veniam alias illo voluptatem.</p>
         <p>
          <i className="fas fa-star"></i> 
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
         </p>
        <img src={user1}alt="no images" className=" image"/>
      <h4>sean parker</h4>

      </div>
    </div> */}

    {/* <div className="col-sm-12 col-md-4 col-lg-4"> 
      <div className="mt-5 lastinform">
      <p><i className="fas fa-quote-left"></i></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
        . Ab suscipit tempore neque asperiores. Esse, fugiat expedita veniam alias illo voluptatem.</p>
       <p>
        <i className="fas fa-star"></i> 
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
       </p>
      <img src={user2} alt="no images" className=" image"/>
      <h4>mike smith</h4>
    </div> */}
  {/* </div> */}
    {/* <div className="col-sm-12 col-md-4 col-lg-4"> 
      <div className="mt-5 lastinform">
      <p><i className="fas fa-quote-left"></i></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
        . Ab suscipit tempore neque asperiores. Esse, fugiat expedita veniam alias illo voluptatem.</p>
       <p>
        <i className="fas fa-star"></i> 
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
       </p>
      <img src={user3} alt="no images" className=" image"/>
      <h4>Mabel jeo</h4>
    </div>
  </div> */}
  {/* </div>
  </div>
</div>  */}



<div className="logo">
  <div className="container">
    <div className="row">
      <div className="col-sm-4 col-md-4 col-lg-2 offset-1">
        <img src={caca} alt="no images" className="img-fluid logoimage"/>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-2">
        <img src={logo} alt="no images" className="img-fluid logoimage"/>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-2">
        <img src={logooppo} alt="no images" className="img-fluid logoimage"/>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-2">
        <img src={logopay} alt="no images" className="img-fluid logoimage"/>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-2 ">
        <img src={logoph}alt="no images" className="img-fluid logoimage"/>
      </div>
    </div>
  </div>
</div>

<Footer />

</div>


    )
  }
}
  
    

export default Home