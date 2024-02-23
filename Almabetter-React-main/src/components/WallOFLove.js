import React from "react";
import "./WallOFLove.css";
import CardWall from "./CardWall";

const WallOFLove = () => {
    return (
        <>
            <div className="container-fluid" id="wall-of-love">
                <div className="heading">
                    <h1>Wall of Love</h1>
                    <img src="https://www.almabetter.com/assets/icons/heart.png" alt="img not found" height="50px" />
                </div>
                <div className="container-fluid" id="wall">
                    <div className="first-col">
                        <CardWall
                            src="https://almablog-media.s3.ap-south-1.amazonaws.com/1656149535542_fa344909ad.jfif"
                            name="Aashruti Agrawal"
                            position="Junior Data Engineer"
                            info=" I’m elated to share that I’m starting a new journey as Junior Data
                                    Engineer at Argus Media Media! I would like to thank AlmaBetter
                                    for digging out the potential in me and providing the wonderful
                                    platform to upskill myself. It is a privilege for me to be able to
                                    get guidance and learn from you, Swapnil Jain and Yagnik Pandya. A
                                    big thanks to Lalita Choudhary for motivating and believing me
                                    throughout this exciting journey. This would not have been
                                    possible without your guidance. Kudos to our effort! Laveena V
                                    Kukreja Monica Balakrishna Laheri Reddy thank you for helping out
                                    me in each and every step of my journey. Looking ahead toward a
                                    wonderful journey and professional growth! I'm excited to start my new job!"
                            time="06:30 PM, 18th Aug"
                        />
                        <CardWall
                            src="https://almablog-media.s3.ap-south-1.amazonaws.com/1650392999968_b2a3fa478e.jpeg"
                            name="Pavan Dhongari"
                            position="Data Analytics Consultant"
                            info=" Hello All, I’m happy to share that I’m starting a new position as
                                    Data Analytics Consultant at Logic Pursuits! Thanks to AlmaBetter
                                    team for helping me in my career transition."
                            time="06:00 PM, 11th Apr"
                        />
                    </div>
                    <div className="sec-col">
                        <CardWall
                            src="https://almablog-media.s3.ap-south-1.amazonaws.com/1670063588990_53d9ebdecc.jpeg"
                            name="Mahin Arvind Chanthira Sekaran"
                            position="Business Analystr"
                            info="I’m happy to share that I’m starting a new position as Business
                            Analyst at Groww, India! Big shoutout to AlmaBetter for providing
                            the platform to prepare and equip myself to get here. Thanks to my
                            mentors, Swapnil Jain and Varun Nayyar, for their game-changing
                            support, guidance and insights. I'm very grateful for the
                            much-needed assistance and support offered by Nihal Sumesh, Lalita
                            Choudhary, Kinjal Sengupta and my teammates, Mahima Phalkey and
                            Lovejeet Singh, in this journey. Thanks to Team Groww for the warm
                            onboarding and the opportunity to help build a better future for
                            the people. Very thrilled and excited!"
                            time="07:00 PM, 9th Jan"
                        />
                        <CardWall
                            src="https://almablog-media.s3.ap-south-1.amazonaws.com/1623244729075_7b42d78b4d.jpeg"
                            name="Harish Kollana"
                            position="Data Analyst"
                            info="I have some exciting news to share! I have accepted a new position
                            as the Data Analyst for Awesome Analytics. It has been a fruitful
                            process, and I could not have done it without the learnings from
                            AlmaBetter. I am very excited to start this new journey"
                            time="07:15 PM, 11th Apr"
                        />
                    </div>
                    <div className="thir-col">
                        <CardWall
                            src="https://almablog-media.s3.ap-south-1.amazonaws.com/1648356203105_4b690300ca.jpeg"
                            name="Rajesh Patel"
                            position="Data Scientist"
                            info="Hello connections! I’m happy to share that I’ve joined Decision
                            Point Analytics as a Data Scientist. I would like to thank Mansi
                            T. for a very warm welcome. Thank you Swapnil Jain, Yagnik Pandya,
                            Alok Anand, Vikash Srivastava, Shivam Dutta, Lalita Choudhary,
                            Monica Balakrishna and Varzaan Rana for your constant support and
                            motivation throughout this learning journey of data science at
                            AlmaBetter."
                            time="05:00 PM, 16th May"
                        />
                        <CardWall
                            src="https://almablog-media.s3.ap-south-1.amazonaws.com/1589449936675_4c72d8904b.jpeg"
                            name="Wasim Khan"
                            position="Associate Data Analyst"
                            info="I am happy to share that I received my course completion certificate from AlmaBetter the journey was not
                            so hard nor easy. I would say it's smooth because of the quality course content and risk-free education.
                            Thank you, Vikash Srivastava and Shivam Dutta for putting together such an amazing course and a wonderful
                            learning experience. Thanks to Alok Anand and Ravi Kumar Gupta for placement support Lalita Choudhary and
                            Monica Balakrishna for student coordination. And lastly thank you career coach Tanishk Sachdeva and
                            champion mentor Shubhankit Sirvaiya for your guidance and motivation during the placement journey. I hope
                            to continue with the community and contribute learning experience as AlmaBetter Alumni."
                            time="12:45 PM, 14th Feb"
                        />
                    </div>
                </div>
                <div className="button">
                    <button type="button" className="btn btn-outline-danger">View More</button>
                </div>
            </div>
        </>
    );
}

export default WallOFLove;