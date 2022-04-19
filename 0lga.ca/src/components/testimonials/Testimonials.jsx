import React from 'react';
import './testimonials.css';
import Avatar from '../../assets/blue.png'
import Rose from '../../assets/Rosemarry.jpeg'
import Adam from '../../assets/Adam.jpeg'
import Jae from '../../assets/Jaeyoung.jpeg'
import {BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill} from 'react-icons/bs'

import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const data = [
  {
    id: 1,
    name: 'Rosemary Ku',
    img: Rose,
    review: `I had the pleasure of working with Olga on a midterm project while enrolled in the Web Development bootcamp at Lighthouse Labs. Olga was a great teammate to work with, she brought a lot of energy to the team, always had a positive outlook, is a strong communicator, and exemplified strong technical skills specifically using Node/Express, Bootstrap, CSS, PostgreSQL, and Javascript. She was always organized, responsive, and overall a great teammate to have!`
  },
  {
    id: 2,
    name: 'Donna Wawzonek',
    img: Avatar,
    review: `Olga and I were colleagues for close to three years at Design Exchange and I would welcome an opportunity to work with her again. As the Education and Competitions Coordinator, Olga brought a number of invaluable skills to ensure the success and growth of her programs. Olga is a self-starter that is both highly organized and responds quickly and effectively to unexpected challenges. Olga is a natural connector and created an enviable community of schools, instructors, and participants for her programs. She prioritizes the experiences of people participating in her programs and works tirelessly to ensure the highest quality of public programs. Olga is a resourceful problem-solver that eagerly tests new strategies, tools, and ways of learning to keep her education programs fun and engaging. Olga is an asset to any team seeking a creative and professional individual that takes ownership and pride in everything she does.`
  },
  {
    id: 3,
    name: 'Adam Schulte',
    img: Adam,
    review: `Olga is a creative problem solver who approaches every challenge with determination and positivity. I enjoyed working with her as we solved javascript-related course-work together and I would highly recommend her for any team!`
  },
  {
    id: 4,
    name: 'Jaeyoung Kim',
    img: Jae,
    review: `I worked with Olga in a group setting for a project in the Web Development bootcamp at Lighthouse Labs. Olga took on the challenge of working through difficult, unfamiliar tasks and communicating any roadblocks clearly with her group members. She has a gift in communicating with people unfamiliar to her and making them feel welcome as she took the initiative to set up a spreadsheet to connect her classmates easily through LinkedIn.`
  },
  {
    id: 5,
    name: 'Shannon Piccinin',
    img: Avatar,
    review: `Olga was a delight to work with during our pair programming sessions together in Lighthouse Labs' Web Development Program. I was always impressed at her ability to think creatively when solving a problem and to articulate ideas as we tackled coding challenges together. I have no doubt that Olga will go on to do amazing things, as she is both an exemplary developer and collaborator.`
  },
  {
    id: 6,
    name: 'Shauna Empringham',
    img: Avatar,
    review: `I had the pleasure of being in the same cohort as Olga at Lighthouse Labs. She's a wonderful, funny, intelligent person and we made fast friends. As a student Olga made some very impressive apps including her Dungeons and Dragons map-making app called DragonDrop, and I can't wait to see what she creates next! I sincerely hope I get the opportunity to work with Olga again, and any company would be all-the-better for having her on the team!`
  },
  {
    id: 7,
    name: 'Brigitte Huard',
    img: Avatar,
    review: `Olga worked for me for over 2.5 years and I was wowed by her dedication, attention to detail, problem solving abilities and terrific attitude. 
    She was identified as a key team player on our team early on and was promoted to roles with more responsibility in light of her leadership and solid organizational skills. She was a favourite with visitors and staff and I regularly received highly positive feedback and praise about her performance.`
  },
  {
    id: 8,
    name: 'Jeremy Forsyth',
    img: Avatar,
    review: `I had the privilege of working with Olga during my 1.5 years managing Educational Programs at Design Exchange, and feel truly lucky to have been her teammate.
    Olga was invaluable in pulling together the museum's education offerings. She maintained a great rapport with our instructors and museum staff during an extremely challenging summer camp season, while also overseeing our home-school, field trip and community outreach programs. No matter how busy things got, Olga remained organized and always ensured that the necessary materials were ordered and ready for the young designers to create. 
    Perhaps most impressively, Olga was able to manage all of these projects while simultaneously providing exceptional customer service at the museum's front desk. She was always ready to give impromptu tours for curious visitors, and her passion for art and design rubbed off on everyone who passed through our space.`
  }
]

const Testimonials = () => {
  return (
    <section id='testemonials'>
      <h5>Endorsemnts from collegues</h5>
      <h2>Testimonials</h2>

<>
      <Swiper className="container testimonials__container swiper-wrapper"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >

        {
          data.map(({id, name, img, review}) => {
            return (
              <SwiperSlide key={id} class="swiper-slide">
          <article className='testimonial'>

          <h3 className='testemonials__directions'><BsFillArrowLeftSquareFill className='testemonials__arrow'/> &nbsp;Swipe to view more &nbsp;<BsFillArrowRightSquareFill className='testemonials__arrow'/></h3>

          <div className="client__avatar">
            <img src={img} alt={name}/>
          </div>
          <h3 className='client__name'>{name}</h3>
          <small className='client__review'>{review}</small>
          </article>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
      </>
    </section>  )
}

export default Testimonials