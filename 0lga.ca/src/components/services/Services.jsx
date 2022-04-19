import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Work History</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Juno College of Technology</h3>
            <small className='services__item-desc'>Administrative coordinator</small>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lead Tech-Talk preparation guiding students in best practices for stand-up presentation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Detail oriented data entry: transcript, grades, expense reports</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Manage and set up Slack channels and Github invitations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Salesforce initiation of program folders and population of tracked content including formula for expected/current sales</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop master docs for student tracking, course work, and grade tracking and link to master tracking using google sheets</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create full course packages including InDesign schedule, and digital distribution</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Design Exchange</h3>
            <small className='services__item-desc'>Education coordinator</small>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Speaker and educator for sustainable and accessible design principles</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Public speaking commitments and award presentation for the Government of Ontario's Accessible Design Competition </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Key note speaker and promoter on behalf of the Design Exchange programming team</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Program Developer for camps and in-house design workshops</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Delivered an increase in attendance through activity development and project management in the Home School Program</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website maintenance for the Expo Design Innovation and Technology (EDIT 2017)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content creation for tours, workshops and public programs</p>
            </li>
          </ul>
        </article>

        

      </div>
    </section>  )
}

export default Services