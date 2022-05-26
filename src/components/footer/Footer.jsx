import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiGooglecloud} from "react-icons/si"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ayush</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonial">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/thatayush/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/LifeAyush" target="_blank"><FaGithub /></a>
        <a href="https://www.cloudskillsboost.google/public_profiles/592a105e-216d-4cde-8dff-51811aa2fe1f" target="_blank"><SiGooglecloud /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ayush Patil <br /> All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer