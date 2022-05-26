import React from "react";
import "./about.css";
import ME from "../../assets/bg1.png";
import { FaAward } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";

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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                6+ months of working experience in various college groups
              </small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>
                Multiple Completed Projects with a vast collection of GitHub
                repositories
              </small>
            </article>
          </div>
          <p>
            I'm very ambitious Full Stack developer looking for a role in an IT
            company with the opportunity to work with the latest technologies on
            challenging and diverse projects. I'm a man with eccentric thinking
            and extreme focus. I'm a confident, hardworking and self-motivated
            person who finds inspiration from the weirdest places. I love
            challenges and while encountering them I often find my strength
            through music and anime.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
