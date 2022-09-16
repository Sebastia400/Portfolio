import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Kow</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            My name is Sebastia, and I am currently coursing software
            engineering at Epitech. Since I was young I knew I wanted to study
            something related with technology, this is why when I grew up I
            decided that I would study software engineering. In my opinion, I
            think that IT is the future and this is why I spend much of my time
            studying and researching by my own about new technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
