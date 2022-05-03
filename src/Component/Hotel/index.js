import React, { Component } from "react";
import './Hotel.css';

class Hotel extends Component {
    render() {
        return (
            <>
            <div className="sliderHotel">
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
  <div class="form-group col-lg-12 ">
    
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="Phone"/>
  </div>
  <div class="form-group col-lg-6 ">
    
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="First-name"/>
  </div>
  <div class="form-group col-lg-6">
    <input type="text" class="form-control" id="exampleInputPassword1"
     placeholder="Last-name"/>
  </div>
  <div class="form-group col-lg-12 ">
    
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="Phone"/>
  </div>
  
  <button type="submit" class="btn btn-primary col-lg-5">Book</button></div></div>
</form>
                </div>
            </div>
            
            </>
        )
    }
}
export default Hotel;