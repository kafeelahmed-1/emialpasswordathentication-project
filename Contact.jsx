import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className='contact'>
      <h1>Contact Me</h1>
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='contact-card'>
            <FontAwesomeIcon icon={faEnvelope} className='email-icon' />
            <p><a href='mailto:mrkafeelahmedswati@gmail.com'>mrkafeelahmedswati@gmail.com</a></p>
          </div>
          <div className='contact-card'>
            <FontAwesomeIcon icon={faGithub} className='github-icon' />
            <p>
              <a href='https://github.com/kafeelswati' target='_blank' rel='noopener noreferrer'>
                github.com/kafeelswati
              </a>
            </p>
          </div>
        </div>
        <div className='contact-form'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='email' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button>Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
