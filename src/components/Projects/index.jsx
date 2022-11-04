import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../../firebase/firebaseConfig";
import { collection, getDocs, limit } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye as view } from "@fortawesome/free-regular-svg-icons";
import { faGithub as github } from "@fortawesome/free-brands-svg-icons";
import "./projects.css";
const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const getProjects = async () => {
    const projects = await getDocs(collection(db, "projects"));
    const docs = [];
    projects.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      setAllProjects(docs);
    });
  };
  useEffect(() => {
    getProjects();
  }, []);
  console.log("allProjects", allProjects);
  return (
    <div id="projects" className="projects">
      <h1>Mis Proyectos</h1>
      <p className="projects_introduce">
        Te presento mis proyectos personales en los que he trabajado
      </p>
      <div className="projects_container">
        <ul className="project_list">
          {allProjects?.map((project, index) => (
            <li className="info_project" key={index}>
              {/* <Link> */}
              <div className="image_container">
                <img src={project.image} alt="" />
              </div>
              <h2>{project.name}</h2>
              <ul className="tech_list_container">
                {project.technologies?.map((tech, index) => (
                  <li className="tech" key={index}>
                    {tech}
                  </li>
                ))}
              </ul>
              <p>{project.description}</p>
              <div className="link_project">
                <a target='_blank'  className="preview" href={`${project.linkpage}`}>
                  <div>
                    <FontAwesomeIcon className="fav_icon"  icon={view} />
                    ver
                  </div>
                </a>
                <a target='_blank' className="github" href={`${project.github}`}>
                  <div>
                    <FontAwesomeIcon className="fav_icon" icon={github} />
                    github repo
                  </div>
                </a>
              </div>
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Projects };
