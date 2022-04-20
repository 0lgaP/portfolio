import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>0lga.ca</a>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/epitolga'><FaFacebookF className='footer__socials-icon'/></a>
        <a href='https://www.instagram.com/0lgatron/'><FiInstagram className='footer__socials-icon'/></a>
        <a href='https://github.com/0lgaP'><BsGithub className='footer__socials-icon'/></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Olga Perron. All right reserverd.</small>
      </div>
    </footer>
  )
}

export default Footer