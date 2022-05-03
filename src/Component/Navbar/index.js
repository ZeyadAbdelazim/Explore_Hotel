import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../accets/img/Component 31 – 1.png';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <NavLink class="nav-link active bar"
                                        style={({ isActive }) =>
                                            isActive
                                                ? {
                                                    color: 'black',
                                                    background: '#',
                                                }
                                                : { color: '#545e6f', background: '#' }
                                        }
                                        aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        style={({ isActive }) =>
                                            isActive
                                                ? {
                                                    color: 'black',
                                                    background: '#',
                                                }
                                                : { color: '#545e6f', background: '#' }
                                        }
                                        to="/bus">Bus</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        style={({ isActive }) =>
                                            isActive
                                                ? {
                                                    color: 'black',
                                                    background: '#',
                                                }
                                                : { color: '#545e6f', background: '#' }
                                        }
                                        to="/hotel">Hotel</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        style={({ isActive }) =>
                                            isActive
                                                ? {
                                                    color: 'black',
                                                    background: '#',
                                                }
                                                : { color: '#545e6f', background: '#' }
                                        }
                                        to="/contact">Contact</NavLink>
                                </li>

                            </ul>
                            <div className="logo">
                                <NavLink class="navbar-brand" to="#"><img src={logo} /></NavLink></div>

                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
export default Navbar;