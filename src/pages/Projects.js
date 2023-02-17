import React from "react";
import Project from "../components/Project/Project";
import "./Projects.scss";
import videoTimelines from "../assets/videoTimelines.png";
import designPatterns from "../assets/designPatterns.png";

const Projects = ({ projects }) => {
  return (
    <main className="main projects nes-container is-dark is-rounded">
      {projects &&
        projects.map((project, i) => {
          return <Project key={project.id || i} project={project} />;
        })}
    </main>
  );
};

export default Projects;
Projects.defaultProps = {
  projects: [
    {
      title: "Timeline scrubber",
      description: "A timeline scrubber implemented in ReactJs",
      techStacks: "stacks",
      img: videoTimelines,
      projectLink: "https://github.com/prakhars144/react-video-timelines-slider",
      codeLink: "https://github.com/prakhars144/react-video-timelines-slider"
    },
    {
      title: "C++ design patterns",
      description: "Implementation of common design patterns in C++",
      techStacks: "stacks",
      img: designPatterns,
      projectLink: "https://github.com/prakhars144/cpp-design-patterns",
      codeLink: "https://github.com/prakhars144/cpp-design-patterns"
    },
  ]
};
