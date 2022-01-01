import React from "react";
import logowhite from '../Home/logo-white.png';
import playstotre from '../Home/play-store.png';
import Appstore from '../Home/app-store.png';
const Footer = () => {
    return (
        <div>
            <div class="footer">
  <div class="container">
    <div class="row">
      <div class=" col-sm-12 col-md-4 col-lg-4">
        <h3 class="footerh3">Download Our App</h3>
        <p>Download App for Android and ios mobile phone</p>
        <div >
          <img src={Appstore} alt="no images"   class="footerimage"/>
          <img src={playstotre} alt="no images"  class="footerimage"/>
        </div>
        
      </div>
      <div class=" col-sm-12 col-md-4 col-lg-4">
        <div class="secundfooter">
          <img src={logowhite} alt="no images" class="img-fluid"/>
          <p>Our Purpuse Is To Sustainably Make The Pleasure and Benefits Of Sports Accessible to The many</p>
        </div>
      </div>
      <div class="col-sm-12 col-md-2 col-lg-2 ">
        <div class="footercontact">
          <h3 class="footerh3">USEfull Link</h3>
          <p>Coupons </p>
          <p>Blog Post </p>
          <p>Return Policy </p>
          <p>Joln Affiliate </p>
        </div>
      </div>
      <div class="col-sm-12 col-md-2 col-lg-2 ">
        <div class="footercontact">
        <h3 class="footerh3">Contact Us</h3>
        <p>Facebook </p>
        <p>Twitter </p>
        <p>Inestgram </p>
        <p>YouTube </p>
      </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12">
        <hr/>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12">
  <p class="copy">Copyright 2020 -Easy Tutorials</p>
    </div>
  </div>
  </div>
   
        </div>
        </div>
        
        
        
    )
}
export default Footer