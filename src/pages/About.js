import React from "react";
import "./About.scss";
import Introduction from "../components/Introduction/Introduction";
import Skills from "../components/Skills/Skills";
import html from "../assets/html5.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import postgresql from "../assets/postgresql.png";
import redux from "../assets/redux.png";
import cpp from "../assets/cpp.png";
import c from "../assets/c.png";
import python from "../assets/python.png"; 

const About = ({ title, text, techStacks }) => {
  return (
    <main className="main main-about nes-container is-dark is-rounded">
      <div className="about">
        <div className="about-container">
          <Introduction title={title} text={text} />
        </div>
        <Skills techStacks={techStacks} />
      </div>
    </main>
  );
};

export default About;
About.defaultProps = {
  title: "Prakhar",
  text:
    "Software Engineer with background working productively in dynamic environments with teams across multiple time zones. Fluent in C++, python and front end libraries like ReactJS with working knowledge of multiple programming languages.",
  techStacks: {
    fe: [
      { JavaScript: js },
      { React: react },
      { Redux: redux },
      { HTML5: html },
      { CSS3: css },
    ],
    be: [
      { "C++": cpp },
      { C: c },
      { Python: python },
      { Node: node },
      { PostgreSQL: postgresql },
      { SQL: sql },
    ]
  }
};
