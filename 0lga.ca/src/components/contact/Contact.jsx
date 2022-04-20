import React, { useRef, useEffect, useState } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaRegCalendarCheck} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import axios from 'axios';


const Contact = () => {
  const [vars, setVars] = useState(null)
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/contact'
    }
    axios.request(options)
    .then((response) => {
      setVars(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(vars.id, vars.template, form.current, vars.u_id)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>perronolga@gmail.com</h5>
            <a href='mailto:perronolga@gmail.com'>Send an Email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Olga Perron</h5>
            <a href='https://m.me/epitolga'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaRegCalendarCheck className='contact__option-icon'/>
            <h4>Calendy</h4>
            <h5>Schedule</h5>
            <a href='https://calendly.com/perronolga/30min'>Book a Meeting</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name' required />
          <input type="text" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>

    </section>  )
}

export default Contact