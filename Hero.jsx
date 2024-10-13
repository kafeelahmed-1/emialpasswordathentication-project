import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
     
      <div className='hero-text'>
      <h1>
  Hey, it's me Kafeel Ahmed Swati, I am a  <span style={{ color: '#007BFF',  padding: '1px 1px', borderRadius: '5px' }}> Web Developer</span> & <span style={{ color: '#007BFF',  padding: '1px 1px', borderRadius: '5px' }}>UI Designer </span>.
</h1>

        <p>"Hello, I’m Kafeel Ahmed Swati, a passionate web developer dedicated to crafting interactive and visually appealing websites. With a strong foundation in HTML, CSS, JavaScript, and React.js, I specialize in building responsive and user-friendly web applications. </p>
        <div className='hero-buttons'>
          <button className='btn download-cv'>Download CV</button>
          <button className='btn hire-me'>Hire Me</button>
        </div>
      </div>
      <div className='hero-image'>
        <img src='./assests/images/bg1.png' alt='Hero' />
      </div>
    </section>
  );
};

export default Hero;
