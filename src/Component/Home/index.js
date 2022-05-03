import React, { Component } from "react";
import './Home.css';
import usa from '../../accets/img/usa.png'
import rio from '../../accets/img/rio.png'
import cairo from '../../accets/img/cairo.png'
import icon1 from '../../accets/img/icon1.png'
import icon2 from '../../accets/img/icon2.png'
import icon3 from '../../accets/img/icon3.png'
import icon4 from '../../accets/img/icon4.png'
import icon5 from '../../accets/img/icon5.png'
import icon6 from '../../accets/img/icon6.png'
import iconF from '../../accets/img/Component 12 – 1.png'
import photo1 from '../../accets/img/pexels-marlon-martinez-1450082.png'
import photo2 from '../../accets/img/pexels-michael-block-3225531.png'
import photo3 from '../../accets/img/pexels-max-ravier-3331064.png'






class Home extends Component {
    render() {
        return (
            <>
                <div className="slider">
                    <div class="container">
                        <div className="row">
                            <div className="contant col-lg-6">
                                <h1>Travel All The World
                                    <br />With Explore.</h1>
                                <h5>(Flight-Hotel-Car)</h5>
                                <button className="btn btn-light ">go to traval</button>
                            </div>
                            <div className="boxSlider col-lg-6">
                                <div className="box">
                                    <button className="btn btnOrang">Flight</button>
                                    <button className="btn dark">Hotel</button>
                                    <button className="btn dark">Package</button>
                                    <div className="form">
                                        <form>
                                            <div className="row">
                                                <div class="mb-3 col-lg-6">
                                                    <label for="exampleInputEmail1" class="form-label">From:</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" />
                                                </div>
                                                <div class="mb-3 col-lg-6">
                                                    <label for="exampleInputEmail1" class="form-label">To:</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" />
                                                </div>
                                                <div class="mb-3 col-lg-6">
                                                    <label for="exampleInputEmail1" class="form-label">Check-in</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" />
                                                </div>
                                                <div class="mb-3 col-lg-6">
                                                    <label for="exampleInputEmail1" class="form-label">Check-out</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" />
                                                </div>
                                                <div class="mb-3 col-lg-12">
                                                    <label for="exampleInputEmail1" class="form-label">Class:</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" />
                                                </div>
                                                <div class="mb-3 col-lg-6">
                                                    <label for="exampleInputEmail1" class="form-label">Adult:</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" />
                                                </div>
                                                <div class="mb-3 col-lg-6">
                                                    <label for="exampleInputEmail1" class="form-label">Childern:</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" />
                                                </div>
                                                <button type="submit" class="btn btnSearch">Search Flight</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hot_tour">
                    <div className="container">
                        <div className="element">
                            <h4>Hot Tours</h4>
                            <p>Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts</p>
                            <div className="line"></div>
                        </div>
                        <div className="row country">
                            <div className="col-lg-4">
                                <img src={usa} />
                                <button className="btn btn-outline-light">Book-Now</button>
                            </div>
                            <div className="col-lg-4">
                                <img src={rio} />
                                <button className="btn btn-outline-light">Book-Now</button>
                            </div>
                            <div className="col-lg-4">
                                <img src={cairo} />
                                <button className="btn btn-outline-light">Book-Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="feature">
                    <div className="container">
                        <div class="row">
                            <div className="col-lg-4 icon">
                                <img src={icon1} /><h5>Travel Plans</h5>
                                <p>Facilis ipsum reprehenderit nemo molestias.
                                    Aut cum mollitia reprehenderit.</p>
                                <div><a href="#">Learn More</a></div>
                            </div>
                            <div className="col-lg-4 icon">
                                <img src={icon2} /><h5>Business Travel</h5>
                                <p>Facilis ipsum reprehenderit nemo molestias.
                                    Aut cum mollitia reprehenderit.</p>
                                <div><a href="#">Learn More</a></div>
                            </div>
                            <div className="col-lg-4 icon">
                                <img src={icon3} /><h5>Family Travel</h5>
                                <p>Facilis ipsum reprehenderit nemo molestias.
                                    Aut cum mollitia reprehenderit.</p>
                                <div><a href="#">Learn More</a></div>
                            </div>
                            <div className="col-lg-4 icon">
                                <img src={icon4} /><h5>Solo Travel</h5>
                                <p>Facilis ipsum reprehenderit nemo molestias.
                                    Aut cum mollitia reprehenderit.</p>
                                <div><a href="#">Learn More</a></div>
                            </div>
                            <div className="col-lg-4 icon">
                                <img src={icon5} /><h5> Honeymoon</h5>
                                <p>Facilis ipsum reprehenderit nemo molestias.
                                    Aut cum mollitia reprehenderit.</p>
                                <div><a href="#">Learn More</a></div>
                            </div>
                            <div className="col-lg-4 icon">
                                <img src={icon6} /><h5>Explorer</h5>
                                <p>Facilis ipsum reprehenderit nemo molestias.
                                    Aut cum mollitia reprehenderit.</p>
                                <div><a href="#">Learn More</a></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="feedback">
                    <div className="container">
                        <h3>Feedback</h3>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className=" commentElement">
                                    <img src={iconF} />

                                    <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                                        Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className=" commentElement">
                                    <img src={iconF} />
                                    <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                                        Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className=" commentElement">
                                    <img src={iconF} />

                                    <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                                        Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                <section className="Recent_From_Blog">
                    <div className="container">
                        <div className="element">
                            <h4>Recent From Blog</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores,
                                <br />perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                            <div className="line"></div>
                        </div>
                        <div className="items">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="item">
                                        <img src={photo3} />
                                        <div className="parghraph">
                                            <h5>30% Discount to Travel
                                                All Around the World</h5>
                                            <p>Far far away, behind the word mountains, far from the countries
                                                Vokalia and Consonantia, there live the blind texts.</p>
                                            <a href="#">learn more</a>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item">
                                        <img src={photo2} />
                                        <div className="parghraph">
                                            <h5>30% Discount to Travel
                                                All Around the World</h5>
                                            <p>Far far away, behind the word mountains, far from the countries
                                                Vokalia and Consonantia, there live the blind texts.</p>
                                            <a href="#">learn more</a>
                                        </div>                                </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item">
                                        <img src={photo1} />
                                        <div className="parghraph">
                                            <h5>30% Discount to Travel
                                                All Around the World</h5>
                                            <p>Far far away, behind the word mountains, far from the countries
                                                Vokalia and Consonantia, there live the blind texts.</p>
                                            <a href="#">learn more</a>
                                        </div>                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Home;