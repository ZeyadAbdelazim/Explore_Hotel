import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <>
            <div className="sliderContact">
                <div className="form">
                <form>
<div className="container">
    <div className="row">
  <div class="form-group col-lg-6 ">
    
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="First-name"/>
  </div>
  <div class="form-group col-lg-6">
    <input type="text" class="form-control" id="exampleInputPassword1"
     placeholder="Last-name"/>
  </div>
  <div class="form-group col-lg-6 ">
    
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="Phone"/>
  </div>
  <div class="form-group col-lg-6">
    <input type="e-Mail" class="form-control" id="exampleInputPassword1"
     placeholder="E-main"/>
  </div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"placeholder="your message"></textarea>
  </div>
  <button type="submit" class="btn btn-primary col-lg-5">Send</button>
  <button type="submit" class="btn btn-primary col-lg-5">Messager</button></div></div>
</form>
                </div>
            </div>
            
            </>
        )
    }
}
export default Contact;