import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>A good understanding of HTML tags</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>A good grasp on CSS properties and variables</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Comfortable in working with CSS frameworks like Bootstrap</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Familiar in creating fully responsive websites using media queries</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Knowledge on core Javascript Fundamentals</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Experienced in development using ReactJs Framework</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Worked with Axios to make API calls for CRUD operations in ReactJs</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Experienced in Python Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deep understanding of Django framework for backend development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Worked on performing CRUD operations on the database in Django</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Experienced in creating user authentication for web apps using Django</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic understanding of Google Cloud through the Google Cloud Facilitator Program</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
