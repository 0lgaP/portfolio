import React from 'react';
import './portfolio.css';
import {BsGithub} from 'react-icons/bs';

const data = [
  {
    id: 1,
    image: "https://i.imgur.com/rmdhqsI.gif",
    title: 'Tweeter',
    description: `Tweeter is a simple, single-page Twitter clone. Tweeter is responsive and adapts to your screen. This repository is created from the starter code provided by LHL. The layout, front-end functionality and animations were built using HTML, CSS, JS, jQuery and AJAX with a back end in Node and Express.`,
    github: 'https://github.com/0lgaP/tweeter'
  },
  {
    id: 2,
    image: "https://i.imgur.com/FL2wJ8y.gif",
    title: 'Jungle',
    description: `Jungle is a mini e-commerce application built with Rails 4.2. This project simulates inheriting an existing code base in a language/framework that you are not comfortable/familiar with, then implementing features and fixes. Tools used are RJS, Stripe, PostgresSQL.`,
    github: 'https://github.com/0lgaP/jungle-rails'
  },
  {
    id: 3,
    image: "https://i.imgur.com/yErLBRG.gif",
    title: 'Pokemon Black Market',
    description: `This midterm project was a collaborative effort. My portion of this project focused on creating a dynamic home page with a filter function, search field and search result page. It utilises database queries to keep my EJS responsive, including alt text for accessibility, and dynamic links to connect to other parts of the page. To create the styling I used a combination of bootstrap and my own CSS. We created our own database based on an ERD we created to show relationships, and seeded  using a spreadsheet with formula to keep our data flexible. This project was written in EJS, Javascript and SCSS.`,
    github: 'https://github.com/0lgaP/buy-sell-store-LHL'
  },
  {
    id: 4,
    image: "https://i.imgur.com/tBZZSXs.gif",
    title: 'Scheduler',
    description: `Scheduler is a single-page, React application. This user friendly app allows you to create, edit or delete interview. The database is managed by a separate API and requests are handled through Axios. The project comes with a testing suite utilising Jest and Cypress.`,
    github: 'https://github.com/0lgaP/scheduler'
  },
  {
    id: 5,
    image: "https://i.imgur.com/1BmL4v2.gif",
    title: 'Dragon Drop',
    description: `Dragon Drop is a multi-page React application that promotes content creation and world building.  The app accommodates a stream of consciousness workflow for the user - through automatic updates and persistent drop down selection.  All updates to the database are automatic and the user is empowered to switch between tabs  allowing for separation of concerns. They can re-order their story and map, create new characters and set a status. We focused on a non destructive design, where story data is added to campaign history, rather than deleted on completion. The API requests are handled through Axios, with  Node and Express back end. The front-end  layout uses tailwind, and the drag-and drop functionality uses the react-dnd library. I created the Dragon Drop logo, character icons, tavern map and assets using Inkscape.`,
    github: 'https://github.com/0lgaP/Dragon-Drop'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, description, github}) => {
            return (
              <article key={id} className='portfolio__item grow'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small className='portfolio__item-desc'>{description}</small>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn btn-primary' target='_blank' rel="noreferrer"><BsGithub className='portfolio__item-icon'/> Code </a>
                </div>
            </article>
            )
          })
        }
        

      </div>
    </section>  )
}

export default Portfolio