import React from "react";
import Prakhar from "../../assets/selfportrait.png";
import "./Introduction.scss";
const Introduction = ({ title, text }) => {
  return (
    <>
      <div className="introduction-container nes-container is-rounded is-dark">
        <div className="introduction-self-portrait">
          <img className="self-portrait " src={Prakhar} alt="Prakhar Shukla" />
          <p className="introduction-text--primary">Prakhar Shukla</p>
        </div>
        <div className="introduction-text ">
          <p className="introduction-paragraph ">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
