import React, { Component } from "react";
import './Bus.css';
class Bus extends Component {
    render() {
        return (
            <>
            <div className="sliderBus">
                <div className="container">
                    <div className="element">
                        <h2>Faster And Safer Buses
                        <br/>For Your Safety</h2>
                        <div className="form row">
                        <div class="form-group col-lg-6 ">
    
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="First-name"/>
  </div>
  <div class="form-group col-lg-6 ">
    
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="First-name"/>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary col-lg-5">Send</button>

                        </div>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}
export default Bus;