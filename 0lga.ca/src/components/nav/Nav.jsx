import React from 'react';
import './nav.css';
import {FaHome, FaPaintBrush} from 'react-icons/fa'
import {ImInfo} from 'react-icons/im'
import {BsBook} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'


const Nav = () => {
  return (
    <nav>
      <a href='#home' aria-label='Home'><FaHome /></a>
      <a href='#about' aria-label='About'><ImInfo /></a>
      <a href='#experiance' aria-label='Experiance'><BsBook /></a>
      <a href='#portfolio' aria-label='Portfolio'><FaPaintBrush/></a>
      <a href='#contact' aria-label='Contact'><AiFillMessage /></a>
    </nav>
  )
}

export default Nav