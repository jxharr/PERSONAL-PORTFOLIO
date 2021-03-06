import { React, useState } from "react";
import Project from "./Project";
import "../styles/Projects.css";


const Projects = () => {
  const [projects, setProject] = useState([
    {
      title: "Java Practice",
      desc: "All the java programs I've written over the course of my programming career up until now. They are all example programs or exercises from the Introduction to Java.",
      techStack: "Java, JavaFX, developed in Eclipse IDE",
      link: "https://github.com/jxharr/java",
    },
    {
      title: "This Website",
      desc: "My personal portfolio website with a ReactJS front end",
      techStack:
        "JavaScript (ReactJS), HTML, CSS, developed in Visual Studio Code",
      link: "https://github.com/jxharr/personal-website",
    },
  ]);

  return (
    <div class="animation-spin">
      {projects.map((project) => (
        <Project
          title={project.title}
          desc={project.desc}
          link={project.link}
          techStack={project.techStack}
        />
      ))}
      ;
    </div>
  );
};

export default Projects;
