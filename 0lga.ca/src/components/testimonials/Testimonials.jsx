import React from 'react';
import './testimonials.css';
import Fem from '../../assets/blue.png'
import Mal from '../../assets/purple.png'

const Testimonials = () => {
  return (
    <section id='testemonials'>
      <h5>Endorsemnts from collegues</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article class="testimonial">
          <div className="client__avatar">
            <img src={Fem} alt="name"/>
            <h5 className='client__name'>Female Endorser</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque, enim voluptate possimus neque vero, facilis ipsa dignissimos commodi rem odit impedit dolore quam ut harum autem error natus voluptas!</small>
          </div>
        </article>
      </div>
    </section>  )
}

export default Testimonials