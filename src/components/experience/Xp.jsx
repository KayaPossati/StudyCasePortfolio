import React from 'react'
import './xp.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Xp = () => {
  return (
    <section id='xp'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container xp_container">
        <div className="xp_frontend">
          <h3>Frontend Development</h3>
          <div className="xp_content">

            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

        <div className="xp_backend">
        <h3>Backend Development</h3>
          <div className="xp_content">

            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Xp