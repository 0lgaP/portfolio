import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import {BsArrowRightSquareFill} from 'react-icons/bs'


const Header = () => {
  return (
    <header>
      <div id="home" className="container header__container">
      <h5>Howdy I'm</h5>
      <h1>Olga Perron</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className='me'>
        <img src="https://i.imgur.com/BhR3kzS.png" alt='Olga Perron' />
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down &nbsp;<BsArrowRightSquareFill className='header__down-arrow'/></a>
      </div>
    </header>
  )
}

export default Header