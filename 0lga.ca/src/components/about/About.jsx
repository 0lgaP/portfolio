import React from 'react';
import './about.css';
import ME from '../../assets/olga_image.jpg'
import {FaAward} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="Olga" />
          </div>
        </div>

        <div className='about__content'>

          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>Lighthouse Labs Fullstack Web Development</small>
            </article>

            <article className='about__card'>
              <RiTeamFill className='about__icon'/>
              <h5>Experiance</h5>
              <small>1 year in Development and 10+ years in the Cultural Sector</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>


          <p>
          I have worked in culture since 2012, focusing on education, public speaking, accessibility and client experience. Through the development and deployment of private and public
          community programs I helped to empower my community and developed a deep understanding of engaging content. I am passionate about risk mitigation and intuitive design, these
          principles are at the forefront of the components I develop. I utilise my practical problem solving experience to implement fail-safe features thorough documentation and a high level of communication. I am looking to find meaningful employment as a web developer which will leverage my passion for communication and technology.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Chat</a>

        </div>
      </div>
    </section>
  )
}

export default About