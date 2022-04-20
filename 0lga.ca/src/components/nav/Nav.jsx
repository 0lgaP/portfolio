import React, {useState} from 'react';
import './nav.css';
import {FaHome, FaPaintBrush} from 'react-icons/fa';
import {ImInfo} from 'react-icons/im';
import {BsBook} from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''} aria-label='Home'><FaHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} aria-label='About'><ImInfo /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#skills' ? 'active' : ''} aria-label='Experience'><BsBook /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} aria-label='Portfolio'><FaPaintBrush/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} aria-label='Contact'><AiFillMessage /></a>
    </nav>
  )
}

export default Nav