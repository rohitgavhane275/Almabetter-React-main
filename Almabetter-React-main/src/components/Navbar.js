import React from "react";
// import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" data-aos="fade-down">
                <div className="container" id="navbar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-brand p-2" href="#"><img src="./static/logo.png" alt="Not found" style={{ width: '150px' }} /></div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href=""></a>
                                <a className="nav-link" href="#">Courses</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Practice</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Free Tutorials</a></li>
                                    <li><a className="dropdown-item" href="#">Articles</a></li>
                                    <li><a className="dropdown-item" href="#">Coding Problems</a></li>
                                    <li><a className="dropdown-item" href="#">Free Quizzes</a></li>
                                    <li><a className="dropdown-item" href="#">Learning Videos</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Events</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Placements</a>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item" href="#">Success Stories</a></li>
                                    <li><a className="dropdown-item" href="#">Placement Statistics</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Community</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hire From Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Refer & Earn</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-danger " id="nav-btn">SIGN IN</button>

                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;