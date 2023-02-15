import React from "react";
import "./Social.scss";

const Social = ({screenSize}) => {
  const handleClick = link => {
    window.open(link);
  };
  console.log(screenSize)
  return (
    <div className={`icon-list social${screenSize === "mobile" ? "-mobile":"-desktop"}`}>
      <i
        className="nes-icon github is-medium navbar-social nes-pointer"
        onClick={() => handleClick("https://github.com/prakhars144")}
      />
      <a href="mailto:prakharshukla@outlook.in">
        <i className="social nes-icon gmail is-medium navbar-social nes-pointer" />
      </a>
      <i
        className="nes-icon linkedin is-medium navbar-social nes-pointer"
        onClick={() => handleClick("https://www.linkedin.com/in/prakhar-shukla-in/")}
      />
    </div>
  );
};

export default Social;
