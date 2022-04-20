import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Work Experience</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Juno College of Technology</h3>
            <small className='services__item-desc'>Administrative coordinator</small>
          </div>

          <ul className='service__list'>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Lead Tech-Talk preparation guiding students in best practices for stand-up presentation</p>
            </li>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Detail oriented data entry: transcript, grades, expense reports</p>
            </li>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Manage and set up Slack channels and Github invitations</p>
            </li>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Salesforce initiation of program folders and population of tracked content including formula for expected/current sales</p>
            </li>
            <li>
            <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Develop master docs for student tracking, course work, and grade tracking and link to master tracking using google sheets</p>
            </li>
            <li>
            <div className="service__list-icon">
              <BiCheck/>
              </div>
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
            <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Speaker and educator for sustainable and accessible design principles</p>
            </li>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Public speaking commitments and award presentation for the Government of Ontario's Accessible Design Competition </p>
            </li>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Key note speaker and promoter on behalf of the Design Exchange programming team</p>
            </li>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Program Developer for camps and in-house design workshops</p>
            </li>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Delivered an increase in attendance through activity development and project management in the Home School Program</p>
            </li>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Website maintenance for the Expo Design Innovation and Technology (EDIT 2017)</p>
            </li>
            <li>
              <div className="service__list-icon">
              <BiCheck/>
              </div>
              <p>Content creation for tours, workshops and public programs</p>
            </li>
          </ul>
        </article>

        

      </div>
    </section>  )
}

export default Services