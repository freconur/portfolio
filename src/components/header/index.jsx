import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
        {/* <div className="parallelogram"></div> */}
        {/* <div className="polka"></div> */}
      <div className="photo_perfil_container">
        <img
          className="photo_perfil_image"
          src="https://firebasestorage.googleapis.com/v0/b/devprojects-591c8.appspot.com/o/portfoliopohoto.jpg?alt=media&token=f5c50077-098c-42ee-b763-7dac32b134d4"
          alt=""
        />
      </div>
      <div className="perfil_info_container">
        <h2>Hola, soy Franco y soy programador <span className="sub">Fullstack javascript</span></h2>
        <p>
          Soy programador Fullstack javascript, en mi experiencia vengo
          desarrollando proyectos personales con las tecnologias mas demandantes, estoy muy motivado con el
          desarrollo de aplicaciones web, y sigo aprendiendo todos los dias.
        </p>
        <div className="button_container">
          <a href="#contactme">
            <button className="contactme_button">contactame</button>
          </a>
          <a href="#projects">
            <button id="projects" className="check_my_work">
              mis proyectos
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Header };
