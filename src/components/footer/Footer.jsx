import React from 'react'
import './footer.css'
import {ImLinkedin} from 'react-icons/im'
const Footer = () => {
  return (
   <footer>
      <a href="#" className='footer__logo'>Navneet</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    <div className="footer__socials">
      <a href="https://linkedin.com"><ImLinkedin/></a>
    </div>
   </footer>
  )
}

export default Footer