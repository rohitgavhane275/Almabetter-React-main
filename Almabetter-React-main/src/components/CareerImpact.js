import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CareerCard from "./CareerCard";


const CareerImpact = () => {
    return (
        <>
            <div className="container container_class py-5" id="careerImpact" >
                <div className="row" data-aos="fade-up">
                    <h2 className="text-dec">
                        Transforming careers with guaranteed outcomes</h2>
                    <p className="text-secondary">We don’t just give certification but outcomes!</p>
                </div>

                <div className="row">
                    <CareerCard />
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-around pb-5">
                <button type="button" className="btn btn-danger m-2 px-3">EXPLORE PROGRAM </button>
                <button type="button" className="btn btn-outline-danger m-2 px-3">DOWNLOAD BROUCHURE</button>
            </div>
        </>

    );
};



export default CareerImpact;