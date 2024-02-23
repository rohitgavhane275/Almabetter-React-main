import React from "react";
import "../components/Footer.css"


const Footer = () => {
    return (
        <footer>
            <div className="container-fluid" id="footer" data-aos="fade-up">
                <div className="container-fluid">

                    <img src="./static/logo_rev.png" alt="" style={{ width: '150px' }} />
                    <div className="footer-info">
                        <ul>
                            <li>Contact Us</li>
                            <li className="text-light ">admissions@almabetter.com</li>
                            <li className="text-light">08046008400</li>
                        </ul>
                    </div>
                    <div className="add">
                        <ul>
                            <li>Official Address</li>
                            <li className="text-light">4th floor, 133/2, Janardhan Towers, Residency Road, Bengaluru, Karnataka, 560025</li>
                        </ul>
                    </div>
                    <div className="c-add">
                        <ul>
                            <li>Communication Address</li>
                            <li className="text-light">4th floor, 315 Work Avenue, Siddhivinayak Tower, 152, 1st Cross
                                Rd., 1st Block, Koramangala, Bengaluru, Karnataka, 560034</li>
                        </ul>
                    </div>
                    <div className="apps">
                        <ul>
                            <li >Follow us</li>
                            <div className="d-flex">
                                <i className="fa-brands fa-facebook fa-xl"></i>
                                <i className="fa-brands fa-instagram fa-xl"></i>
                                <i className="fa-brands fa-linkedin fa-xl"></i>
                                <i className="fa-brands fa-twitter fa-xl"></i>
                                <i className="fa-brands fa-youtube fa-xl"></i>
                                <i className="fa-brands fa-telegram fa-xl"></i>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="container-fluid">
                    <ul>
                        <li className="text-light">Company</li>
                        <li>Success Stories</li>
                        <li>About Us</li>
                        <li>Hire From Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="container-fluid">
                    <ul>
                        <li className="text-light">Courses</li>
                        <li>Certification in Full Stack Data Science and AI</li>
                        <li>Certification in Full Stack Web Development</li>
                        <li>Masters in CS: Data Science and Artificial Intelligence</li>
                        <li>Masters in Computer Science: Software Engineering</li>
                        <li>Diploma in Computer Science Course</li>
                    </ul>
                </div>
                <div className="container-fluid">
                    <ul>
                        <li className="text-light">Resources</li>
                        <li>Blog</li>
                        <li>Events</li>
                        <li>Community</li>
                        <li>Placement Statistics</li>
                    </ul>
                </div>
                <div className="container-fluid">
                    <ul>
                        <li className="text-light">Join AlmaBetter</li>
                        <li>Sign Up</li>
                        <li>Become A Coach</li>
                        <li>Coach Login</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;