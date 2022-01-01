import React , {Component} from 'react';
import { BrowserRouter , Route  } from 'react-router-dom';
import Home from './compontents/Home';
import About from './compontents/About/Index';
import  Navbar  from './compontents/Navbar';
import Footer from './compontents/Footer';
import Contact from './compontents/Contact';
import Login from './compontents/Login';
import Register from './compontents/Register';
import UserForm from "./compontents/UserForm/UserForm";
import CartProvider from "../src/compontents/store/CartProvider";
import Products from "./compontents/Products/Products";
import ProductDetails from "./compontents/Products/ProductDetails";
import CartDetails from './compontents/Cart/CartDetails' ;








class App extends Component {


  
  render() {
    return (
    <BrowserRouter>
      <div className="App">
       
      <Navbar/>
      
      {/* <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} /> */}
      <Footer />
        
  
       </div>
    </BrowserRouter>
    )
  }
}

export default App;
