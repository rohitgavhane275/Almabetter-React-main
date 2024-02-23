import React from "react";

const Career_Service = (props) => {
    const { img_icon, img_title, img_paragraph } = props;
    return (
        <>
            <div className="card bg-dark text-center text-light my-2" style={{ width: '20rem', height: '14rem', padding: '36px 36px', border: '0.5px solid gray' }} data-aos="fade-up">
                <div className="col-lg-3 mx-auto">
                    <img src={img_icon} style={{ height: "63px" }} alt="not found" />
                </div>

                <p className="text-lg mt-3 mb-0">{img_title}</p>
                <p className="text-base mt-2 mb-0">{img_paragraph}</p>
            </div>
        </>
    )
}
export default Career_Service;