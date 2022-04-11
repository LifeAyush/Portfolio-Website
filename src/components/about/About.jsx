import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import {FiUsers} from "react-icons/fi"
import {VscFolderActive} from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Me" />
        </div>
        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about__icon"/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed inventore odit corporis. Ipsa voluptatibus iure, quam deleniti et fugit distinctio dicta eaque eligendi ad blanditiis corrupti accusantium provident nihil.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
