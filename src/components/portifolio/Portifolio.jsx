import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-crypto-currency-dashboard-and-financial-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portifolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portifolio_item'>
                <div className="portifolio_item-img">
                  <img src={image} alt={title} />
                </div>
                
                <h3>{title}</h3>
                <div className="portifolio_item-cta">
                  <a href={github} target="_blank" rel="noreferrer" className='btn'>Github</a>
                  <a href={demo} target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portifolio