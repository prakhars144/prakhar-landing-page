import React from "react";
import confirmSound from "../assets/8bitconfirm.mp3";
import "./Home.scss";

const Home = ({ ...props }) => {
  let audio = new Audio(confirmSound);
  const handleClick = () => {
    audio.play();
    props.history.push("/about");
  };
  return (
    <main
      className="main home nes-container is-dark is-rounded"
      onClick={handleClick}
    >
      <div className="title">
        <h1 className="title-text title-text--primary">Prakhar Shukla</h1>
        <h2 className="title-text title-text--secondary">Software Engineer</h2>
        <h2 className="title-text title-text--tertiary nes-pointer flash">
          - Click to Start -
        </h2>
      </div>
    </main>
  );
};

export default Home;
