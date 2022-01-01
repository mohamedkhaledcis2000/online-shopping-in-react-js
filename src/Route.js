import { BrowserRouter as Router , Route  } from 'react-router-dom';
import Login from './compontents/Login/index';
import Home from './compontents/Home/index';
import About from './compontents/About/Index';
import CartDetails from './compontents/Cart/CartDetails' ;
import ProductDetails from "./compontents/Products/ProductDetails";
import Products from "./compontents/Products/Products";
import CartProvider from "../src/compontents/store/CartProvider";
import UserForm from "./compontents/UserForm/UserForm";
import Contact from './compontents/Contact/index';
import Register from './compontents/Register/index';


let RouterApp =()=>{
    return(
<CartProvider>
      <Router>
      <Route path="/Login" component={Login} />
      <Route path="/Contact" component={Contact} />

        {/* <Route path="/" component={Navbar} /> */}

        <Route path="/products" component={Products} exact />
        <Route path="/" component={Home} exact />
        <Route path="/details" component={() => <CartDetails />} exact />
        <Route path="/About" component={About} exact />
        <Route
          path="/productDetails"
          component={(props) => <ProductDetails {...props} exact />}
        />
        <Route path="/userform" component={UserForm}/>
        <Route path="/Register" component={Register} />

      </Router>
    </CartProvider>
    )
}

export default RouterApp