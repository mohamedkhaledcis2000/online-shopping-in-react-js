import React,{useState} from "react";
import '../Contact/style.css'
import Navbar from "../Navbar";
import Footer from "../Footer";
const Contact  = () => {
     const [userName, setUserName] = useState("");
     const [telephone, setTelephone] = useState("");
     const [userNameErr, setUserNameErr] = useState("false");
     const [telephoneErr, setTelephoneErr] = useState("false");



     function contactHandle(e) {
      if (userName.length < 16 || telephone.length < 11 ) {
          alert("type correct values");
      }
      else {
          alert("correct values");
      }
      e.preventDefault()
  }
  function nameHandler(e) {
      let item = e.target.value;
      if (item.length < 16) {

          setUserNameErr(true);
      }
      else {
          setUserNameErr(false);

      }
      setUserName(item);


  }
  function teleHandler(e) {
      let item = e.target.value;
      if (item.length < 11) {

          setTelephoneErr(true);
      }
      else {
          setTelephoneErr(false);

      }
      setTelephone(item);


  }




return (
  <div>
  <Navbar />
  <div class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <h2>Contact Us</h2>
                        <form action="" onSubmit={contactHandle}>
                            <input type="text" placeholder="UserName" class="contactinput" onChange={nameHandler} /><br/>{userNameErr ? <span style={{ fontSize: 12, color: "red" }}>user name not valid</span> : ""}<br/>
                            <input type="tel" placeholder="Phone Number" class="contactinput" onChange={teleHandler} /><br/> {telephoneErr ? <span style={{ fontSize: 12, color: "red" }}>telephone not valid</span> : ""}<br/>
                            <textarea placeholder="massage" class="contactinput areatext"></textarea><br/>
                            <button type="submit" class="btn btn-dark">Send</button><br/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  <Footer />
  </div>
)
}
export default Contact