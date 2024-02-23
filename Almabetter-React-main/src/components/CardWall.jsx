import React from "react";
import "./CardWall.css";


const CardWall = ({ name, position, info, time, src }) => {
  return (
    <div className="cardWall" data-aos="fade-up">
      <div className="img">
        <img src={src}
          alt="img not found" style={{ borderRadius: "45px", height: "45px", width: "45px" }} />
      </div>
      <div className="info">
        <h6>{name}</h6>
        <p className="gray">{position}</p>
        <p>{info}</p>
        <p className="gray">{time}</p>
      </div>
    </div>
  );
};

export default CardWall;