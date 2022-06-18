import React from 'react'
import './about.css'

import ME from '../../assets/me-about.jpg'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderOpened className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nam reprehenderit eveniet error deleniti suscipit natus ipsum consectetur earum repellendus quo, incidunt nobis veritatis accusamus voluptatibus optio, asperiores nemo quaerat.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About