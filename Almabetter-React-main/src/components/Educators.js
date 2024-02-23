import React from "react";
import EduCard from "./EduCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Educators = () => {
    return (
        <>
            <div className="container container_class py-5" id="edu" >
                <div className="row">
                    <div className="col-sm-12" data-aos="fade-up">
                        <h2 className="text-dec">Meet your Educators & Mentors</h2>
                        <p className="text-secondary">Get taught by educators from top educational institutions and companies</p>
                    </div>
                </div>
                <div className="row mt-4" >
                    <EduCard />
                </div>
            </div>
        </>
    );
};


export default Educators;