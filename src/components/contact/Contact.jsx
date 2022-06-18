import React, { useRef } from 'react';
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oyq3ihs', 'template_sq7z0bg', form.current, 'N0U01EhmriKK5mf9S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>kaypossati@gmail.com</h5>
            <a href="mailto:kaypossati@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_icon'/>
            <h4>Messenger</h4>
            <h5>Kayã Possati</h5>
            <a href="https://m.me/kayaposs" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_icon'/>
            <h4>Whatsapp</h4>
            <h5>Kayã Possati</h5>
            <a href="https://m.me/kayaposs" target="_blank" rel="noreferrer">Send a message</a> {/* not putting my number here */}
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Type Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact