import React from "react";
import "./CardFee.css";


const CardFee = ({ index, cardName, cardAmount, cardEmi, cardInfo }) => {
    return (
        <>
            <div className="card-fee" key={index} data-aos="fade-up">
                <div className="container-fluid">
                    <h3>{cardName}</h3>
                    <img className="my-3" src="./static/logo.png" alt="not found" style={{ height: '20px' }} />
                    <h1>{cardAmount}</h1>
                    <p className="mb-3">*Pay in easy EMIs starting at INR {cardEmi} per month.</p>
                </div>
                <ul>
                    {cardInfo.map((val, index) => {
                        return (

                            <li key={index}>
                                <div className="fee-li">
                                    <i className="fa-solid fa-check fee-i"></i>
                                    <p className="card-fee-prop">{val}</p>
                                </div>

                            </li>
                        )
                    })}
                </ul >
                <button className="btn btn-danger w-75 mb-2">Enrol Now</button>
                <button className="btn btn-outline-danger w-75">Talk to our Admission Team</button>

            </div>
        </>
    );
}

export default CardFee;