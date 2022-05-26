import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiGooglecloud} from "react-icons/si"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/thatayush/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/LifeAyush" target="_blank"><FaGithub /></a>
        <a href="https://www.cloudskillsboost.google/public_profiles/592a105e-216d-4cde-8dff-51811aa2fe1f" target="_blank"><SiGooglecloud /></a>
    </div>
  )
}

export default HeaderSocials