import React, { Component } from "react";
import facebook from '../../accets/img/facebook.png'
import inst from '../../accets/img/instagram (1).png'
import behance from '../../accets/img/behance.png'
import './Footer.css';



class Footer extends Component {

    render() {
        return (
            <>
                <footer class="bg-dark text-center text-white">
                    <div class="container p-4">


                        <section class="">
                            <form action="">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-auto">
                                        <p class="pt-2">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>

                                    <div class="col-md-5 col-12">
                                        <div class="form-outline form-white mb-4">
                                            <input type="email" id="form5Example21" class="form-control" />
                                            <label class="form-label" for="form5Example21">Email address</label>
                                        </div>
                                    </div>

                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-outline-light mb-4">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>

                        <section class="mb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                                eum harum corrupti dicta, aliquam sequi voluptate quas.
                            </p>
                        </section>

                        <section class="">
                            <div class="row">
                                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">About Travel</h5>

                                    <p>lor sit amet consectetur adipisicing elit. Sunt distinctio earum
                                        repellat quaerat voluptat</p>
                                </div>

                                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Links</h5>

                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" class="text-white">Manila flights
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Dubai flights
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Bangkok flights
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#!" class="text-white">New York Flights
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Top Hotels</h5>

                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" class="text-white">Boracay Hotel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Dubai Hotel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Singapore Hotel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Manila Hotel
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Top Hotels</h5>

                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" class="text-white">Boracay Hotel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Dubai Hotel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Singapore Hotel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Manila Hotel
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Best Places</h5>

                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" class="text-white">Boracay Beach

                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Dubai

                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Singapore/</a>

                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Hongkong

                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    
                                        <img src={behance} />                            

                                   
                                        <img src={inst}/>                           

                                    
                                        <img src={facebook}/>                    

                                </div>
                            </div>
                        </section>
                    </div>


                    <div class="text-center p-3">
                        © 2020 Copyright : 
                        <a class="text-white"> Zeyad Abdelazim </a>
                    </div>
                </footer>
            </>
        )

    }
}
export default Footer;

