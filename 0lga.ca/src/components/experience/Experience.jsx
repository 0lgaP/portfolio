import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'
import {FiMic} from 'react-icons/fi'
import {GiHeartBottle} from 'react-icons/gi'

const Experience = () => {
  return (
    <section id='skills'>
      <h5>What I do</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>HTML5</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>CSS</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>React</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>JavaScript</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Bootstrap</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Tailwind</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Storybook</h4>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Node.js</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>PostgresSQL</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Express</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Ruby</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Git</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Jest</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Mocha</h4>
            </article>

          </div>

        </div>

        <div className="experience__backend">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FiMic className='experience__details-icon' />
              <h4>Communication</h4>
            </article>

            <article className='experience__details'>
              <FiMic className='experience__details-icon' />
              <h4>Public Speaking</h4>
            </article>

            <article className='experience__details'>
              <FiMic className='experience__details-icon' />
              <h4>Project Management</h4>
            </article>

            <article className='experience__details'>
              <FiMic className='experience__details-icon' />
              <h4>Organization</h4>
            </article>

            <article className='experience__details'>
              <FiMic className='experience__details-icon' />
              <h4>Training</h4>
            </article>

            <article className='experience__details'>
              <FiMic className='experience__details-icon' />
              <h4>Teaching</h4>
            </article>

            <article className='experience__details'>
              <FiMic className='experience__details-icon' />
              <h4>Community Building</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Art & Asset Creation</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GiHeartBottle className='experience__details-icon-art' />
              <h4>Inkscape</h4>
            </article>

            <article className='experience__details'>
              <GiHeartBottle className='experience__details-icon-art' />
              <h4>Blender</h4>
            </article>

            <article className='experience__details'>
              <GiHeartBottle className='experience__details-icon-art' />
              <h4>Photoshop</h4>
            </article>

            <article className='experience__details'>
              <GiHeartBottle className='experience__details-icon-art' />
              <h4>InDesign</h4>
            </article>

            <article className='experience__details'>
              <GiHeartBottle className='experience__details-icon-art' />
              <h4>Unreal Engine</h4>
            </article>

            <article className='experience__details'>
              <GiHeartBottle className='experience__details-icon-art' />
              <h4>Substance Painter</h4>
            </article>

          </div>
        </div>


      </div>

    </section>  
  )
}

export default Experience