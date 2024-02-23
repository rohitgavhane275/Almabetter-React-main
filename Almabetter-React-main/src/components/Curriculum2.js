import React from "react";
import { useState, useEffect } from "react";
import CareerService from "./CareerService";




// container 1
const Eligibility_data = [
    {
        img_icon: "./static/1 (1).png",
        img_title: "Graduation Degree",
        img_paragraph: "Must be a graduate at the time of AlmaX enrollment.",
    },
    {
        img_icon: "./static/1 (2).png",
        img_title: "Completed the Foundation Track",
        img_paragraph: "Completed the foundation track of the course.",
    },
    {
        img_icon: "./static/1 (3).png",
        img_title: "AlmaBetter Comprehensibility Assessment Test (AB-CAT)",
        img_paragraph: "Take entrance exam for AlmaX",
    },
];


// container 2
const BI = ["7 Cs of Business Communication",
    "Grammar: Tenses, Adjectives, and Verbs",
    "Body Language & Modals",
    "Ace your Business Presentations",
    "Email Writing"]

const PR = ["Build highly optimized Resumes and Cover Letters",
    "Build your LinkedIn Profile",
    "Build your GitHub Portfolio",
    "Build your own website",
    "Review of your portfolio"]

const IM = ["Interview Best Practices",
    "10+ Mock Coding Interviews",
    "10+ Mock Analytics Interviews",
    "10+ Mock Communication Interviews",
    "Company-wise Interview Guides"]

const CT = ["20+ Coding Challenges",
    "50+ Assignments",
    "1 Python Project",
    "1 Data Analytics Project",
    "1 ML Modelling Project"]

// container 3
const Alma_Career_Service = [
    {
        img_icon: "./static/1 (7).png",
        img_title: "Placement Support",
        img_paragraph: "Complete support from our dedicated placement team until you get a job",
    },
    {
        img_icon: "./static/1 (9).png",
        img_title: "Resume Building",
        img_paragraph: "Resume sharing in our network of 700+ hiring partners",
    },
    {
        img_icon: "./static/1 (5).png",
        img_title: "AlmaX Job Application",
        img_paragraph: "End to end application tracking of multiple interview rounds",
    },
    {
        img_icon: "./static/1 (6).png",
        img_title: "Mock Interviews",
        img_paragraph: "Professional mock interviews assistance",
    },
    {
        img_icon: "./static/1 (2).png",
        img_title: "Dedicated Career Coach",
        img_paragraph: "Expert career coaches to guide you throughout the program",
    },
    {
        img_icon: "./static/1 (8).png",
        img_title: "Growth Champion",
        img_paragraph: "Know learning strategies and get mentorship from our top Alumni's",
    },
];


const Curriculum2 = () => {

    const [active, setactive] = useState("BI");


    const data = () => {
        if (active === "BI") {
            return BI;
        }
        else if (active === "PR") {
            return PR;
        }
        else if (active === "IM") {
            return IM;
        }
        else if (active === "CT") {
            return CT;
        }

    }

    useEffect(() => {
        document.getElementById(active).style.borderLeft = '5px solid red';
    }, [active])

    useEffect(() => {
        const arr = ["BI", "PR", "IM", "CT"];
        arr.forEach((val) => {

            // (val == active ? document.getElementById(val).style.borderLeft = '5px solid red' : document.getElementById(val).style.borderLeft = '5px solid white');
            if (val !== active) {
                document.getElementById(val).style.borderLeft = '5px solid white';
            }
        })
    })


    return (
        <>
            <div className="container-fluid bg-black py-5">
                <div className="container">
                    <h3 className="text-light">100% Job Assurance with AlmaX Career Track</h3>
                    <img src="./static/red lines.svg" className="mb-3" alt="not found" />
                    <p className="text-light">
                        We have designed a dedicated career track along with career
                        support services to help you become industry ready and make sure
                        you land your dream job!
                    </p>
                </div>
                <div className="container py-3">
                    <div className="d-flex align-items-center text-light">
                        <h3 className="bg-danger rounded-circle m-0 px-3 py-2">1</h3>
                        <h3 className=" m-0 ms-2">AlmaX Eligibility Requirements</h3>
                    </div>
                    <img src="./static/red lines.svg" className="mx-5 mb-3" alt="not found" />
                    <div className="container d-flex flex-wrap justify-content-around">
                        {Eligibility_data.map((val) => {
                            return (
                                <>
                                    <CareerService
                                        img_icon={val.img_icon}
                                        img_title={val.img_title}
                                        img_paragraph={val.img_paragraph}
                                    />
                                </>
                            );
                        })}
                    </div>

                </div>
                <div className="container py-3">
                    <div className="d-flex align-items-center text-light">
                        <h3 className="bg-danger rounded-circle m-0 px-3 py-2">2</h3>
                        <h3 className=" m-0 ms-2">AlmaX Curriculum</h3>
                    </div>
                    <img src="./static/red lines.svg" className="mx-5 mb-3" alt="not found" />
                    <div className="container d-flex flex-column">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-group">
                                    <li className="list-group-item rounded d-flex justify-content-between p-3 my-2" id="BI" style={{ cursor: 'pointer' }} onClick={() => setactive("BI")} data-aos="fade-right">
                                        <div className="d-flex flex-column">
                                            <p className="text-secondary m-0">BUSINESS COMMUNICATION</p>
                                            <p className="text-black m-0">Add-On : Optimizing Business Emails with AI</p>
                                        </div>
                                        <div className="d-flex">
                                            <i className="fa-solid fa-clock-rotate-left me-1 mt-1" style={{ color: "#428a38" }}></i>
                                            <p className="text-success">15days</p>
                                        </div>

                                    </li>
                                    <li className="list-group-item rounded d-flex justify-content-between p-3 my-2" id="PR" style={{ cursor: 'pointer' }} onClick={() => setactive("PR")} data-aos="fade-right" >
                                        <div className="d-flex flex-column">
                                            <p className="text-secondary m-0">PROFILE AND RESUME BUILDING</p>
                                            <p className="text-black m-0">Add-On : AI-Driven Resume Optimizing Techniques</p>
                                        </div>
                                        <div className="d-flex">
                                            <i className="fa-solid fa-clock-rotate-left me-1 mt-1" style={{ color: "#428a38" }}></i>
                                            <p className="text-success">15days</p>
                                        </div>

                                    </li>
                                    <li className="list-group-item rounded d-flex justify-content-between p-3 my-2" id="IM" style={{ cursor: 'pointer' }} onClick={() => setactive("IM")} data-aos="fade-right">
                                        <div className="d-flex flex-column">
                                            <p className="text-secondary m-0">INTERVIEW PREP & MOCK INTERVIEW</p>
                                            <p className="text-black m-0">Add-On : Interview preparation assistance with our own AI tool "WiseChat"</p>
                                        </div>
                                        <div className="d-flex">
                                            <i className="fa-solid fa-clock-rotate-left me-1 mt-1" style={{ color: "#428a38" }}></i>
                                            <p className="text-success">1Month</p>
                                        </div>

                                    </li>
                                    <li className="list-group-item rounded d-flex justify-content-between p-3 my-2" id="CT" style={{ cursor: 'pointer' }} onClick={() => setactive("CT")} data-aos="fade-right">
                                        <div className="d-flex flex-column">
                                            <p className="text-secondary m-0">CODING & TECHNICAL REVISION</p>
                                            <p className="text-black m-0">Add-On :Automated Coding Challenges with AI</p>
                                        </div>
                                        <div className="d-flex">
                                            <i className="fa-solid fa-clock-rotate-left me-1 mt-1" style={{ color: "#428a38" }}></i>
                                            <p className="text-success">1Month</p>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="card p-4 card-mobile-queryyy" data-aos="fade-up">
                                    <h5>Topics</h5>
                                    <ul className="text-secondary m-0">
                                        {
                                            data().map((val) => {
                                                return (<li><p>{val}</p></li>)
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="btn text-light fw-bold mt-5 px-5 bg-danger explore-btn align-self-center"
                            type="button">EXPLORE CURRICULUM</button>
                    </div>

                </div>
                <div className="container py-4">
                    <div className="d-flex align-items-center text-light">
                        <h3 className="bg-danger rounded-circle m-0 px-3 py-2">3</h3>
                        <h3 className=" m-0 ms-2">AlmaX Career Services</h3>
                    </div>
                    <img src="./static/red lines.svg" className="mx-5 mb-3" alt="not found" />
                    <div className="container d-flex flex-wrap justify-content-around">
                        {Alma_Career_Service.map((val) => {
                            return (
                                <>
                                    <CareerService
                                        img_icon={val.img_icon}
                                        img_title={val.img_title}
                                        img_paragraph={val.img_paragraph}
                                    />
                                </>
                            );
                        })}
                    </div>

                </div>
                <div className="container py-3">
                    <div className="d-flex align-items-center text-light">
                        <h3 className="bg-danger rounded-circle m-0 px-3 py-2">4</h3>
                        <h3 className=" m-0 ms-2">Land your dream job at one of the leading tech companies</h3>
                    </div>
                    <img src="./static/red lines.svg" className="mx-5 mb-3" alt="not found" />
                    <div className="container d-flex flex-column col-lg-12 col-md-12 col-sm-12 align-items-center">
                        <img className="bg-white w-100 p-2" src="./static/companies.png" alt="img" />
                        <p className="text-light text-center mt-3 mb-5 paragraph">Go to Program
                            Fee section to know Career Services Fee.</p>
                        <button className="btn text-light fw-bold px-5 bg-danger explore-btn"
                            type="button">EXPLORE Program</button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Curriculum2;
