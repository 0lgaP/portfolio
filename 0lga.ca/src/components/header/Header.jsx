import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/0lga.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Howdy I'm</h5>
      <h1>Olga Perron</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className='me'>
        <img src={ME} alt='Olga Perron' />
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header