import React, { useId } from "react";
import "./Home.css";


const Home = () => {
    const yearOption = useId();
    return (
        <>
            <div className="container-fluid my-5" id="Home">
                <div className="container d-flex flex-wrap">
                    <div className="container w-50 homc">
                        <p className="black-block bg-dark text-light text-center">Pay after placement</p>
                        <h1 className="text-3xl normal-case leading-8 head-txt">Certification in Full Stack Web Development</h1>
                        <span className="d-flex cal"><img src="./static/calender.svg" className="cal-img" alt="calender" />
                            Cohort Slider Starts on 24th November</span>
                        <p className="collab"><b>In Collaboration with :</b></p>
                        <div className="d-flex align-items-center">
                            <img src="./static/c1.png" alt="company1" className="company-img me-2" />
                            <a className="btn btn-outline-danger p-2" href="https://www.youtube.com/watch?v=mjWaDsU6R_0"> <i className="fa-solid fa-play me-2"></i>What Video</a>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item border-0">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                                <span style={{ fontSize: '14px', color: "rgb(108 108 108)" }}>Advanced Certification from E&ICT Academy, IIT Guwahati.</span>
                            </li>
                            <li className="list-group-item border-0">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                                <span style={{ fontSize: '14px', color: "rgb(108 108 108)" }}>6 months part-time program with online classes</span>
                            </li>
                            <li className="list-group-item border-0">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                                <span style={{ fontSize: '14px', color: "rgb(108 108 108)" }}>Revised curriculum for post Chat-GPT era</span>
                            </li>
                            <li className="list-group-item border-0">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                                <span style={{ fontSize: '14px', color: "rgb(108 108 108)" }}>No coding experience required</span>
                            </li>
                            <li className="list-group-item border-0">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                                <span style={{ fontSize: '14px', color: "rgb(108 108 108)" }}>Suitable for final years, graduates and early professionals.</span>
                            </li>
                        </ul>

                        <div className="d-flex flex-wrap mt-2 justify-content-between">
                            <p className="btn btn-danger py-2 mx-auto my-2" style={{ width: '250px' }}>EXPLORE PROGRAM</p>
                            <p className="btn btn-outline-danger py-2 m-auto" style={{ width: '250px' }}>ENROLL NOW</p>

                        </div>

                        <div className="row" data-aos="fade-up">
                            <div className="col-4 count-div">
                                <h1 className="count">700+</h1>
                                <p className="count-txt">Hiring Partners</p>
                            </div>
                            <div className="col-4 count-div">
                                <h1 className="count">8 LPA</h1>
                                <p className="count-txt">Avg Salary</p>
                            </div>
                            <div className="col-4 count-div">
                                <h1 className="count">25 LPA</h1>
                                <p className="count-txt">Highest Salary</p>
                            </div>
                        </div>
                    </div>
                    <div className="container w-50 homc d-flex justify-content-center" style={{ position: 'relative', overflow: 'hidden' }}>
                        <div className="pink-block"></div>
                        <div className="card login align-self-center" data-aos="fade-left">
                            <div className="card-head">
                                <div className="card-heading">
                                    <h3>Request Callback</h3>
                                    <p >Fill out the form below !</p>
                                </div>
                                <div className="call-icon">
                                    <i className="fa-solid fa-phone fs-2"></i>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="c-body px-2">
                                    <input className="form-input pt-1" type="text" placeholder="Enter Full Name" />
                                    <input className="form-input pt-1" type="text" placeholder="Enter Your Email" />
                                    <lable htmlFor={yearOption} style={{ fontSize: "14px", fontWeight: "500" }}>Graduation Year*</lable>
                                    <select className="form-input pt-1" id={yearOption}>
                                        <option></option>
                                        <option>2013</option>
                                        <option>2014</option>
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                        <option>2028</option>
                                    </select>

                                    <lable htmlFor="working-status" style={{ fontSize: "14px", fontWeight: "500" }}>Are You Currently Working ?</lable>
                                    <div style={{ margin: "5px" }}>
                                        <input type="radio" value="yes" id="yes" />&nbsp;
                                        <lable htmlFor="yes" style={{ fontSize: "14px", fontWeight: "500", }}>Yes</lable>&nbsp;&nbsp;
                                        <input type="radio" value="no" id="no" />&nbsp;
                                        <lable htmlFor="no" style={{ fontSize: "14px", fontWeight: "500", }}>No</lable>
                                    </div>
                                    <div className="d-flex">
                                        <input type="text" id='working-status' className="form-input mobile-no pt-1" placeholder="+91" />
                                        <input type="number" className="form-input mobile-no-I pt-1" placeholder="Mobile Number" />
                                    </div>
                                    <button type="submit" className="btn2" href="#">SUBMIT</button>
                                    <p className="note">By continuing, you confirm that you have read and agreed to AlmaBetter’s <span style={{ color: "#f00037" }}>Terms</span> and <span style={{ color: "#f00037" }}>Privacy policy</span></p>
                                </div>
                            </div>
                        </div>
                        {/* end */}
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <h5 className="note2">Learn from the top 1% instructors and mentors from leading tech companies</h5>

                    <div className=" d-flex flex-wrap justify-content-center py-3 " data-aos="fade-up">
                        <img src="./static/c1.svg" alt="compani-logo1" className="img-company-logo col-lg-2 col-md-2 col-sm-2 m-2" />
                        <img src="./static/c2.svg" alt="compani-logo2" className="img-company-logo col-lg-2 col-md-2 col-sm-2 m-2" />
                        <img src="./static/c3.svg" alt="compani-logo3" className="img-company-logo col-lg-2 col-md-2 col-sm-2 m-2" />
                        <img src="./static/c4.svg" alt="compani-logo4" className="img-company-logo col-lg-2 col-md-2 col-sm-2 m-2" />
                        <img src="./static/c5.svg" alt="compani-logo5" className="img-company-logo col-lg-2 col-md-2 col-sm-2 m-2" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;