import React from 'react'
import './footer.css'

import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>KAYA</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#xp">Experience</a></li>
        <li><a href="#portifolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Kayã Possati. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer