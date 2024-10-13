import React from 'react';
import './TechnicalProficiency.css';

const TechnicalProficiency = () => {
  return (
    <section className='technical-proficiency'>
      <div className='heading'>
        <h2>Technical Proficiency</h2>
      </div>
      <div className='content'>
        <div className='skills-cards'>
            
        <div className='card' >HTML</div>
<div className='card' >CSS</div>
<div className='card' >JavaScript</div>
<div className='card' >React.js</div>

        </div>
        <div className='proficiency-scale'>
          <div className='skill'>
            <p>HTML: 90%</p>
            <div className='progress-bar'>
              <div className='progress' style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className='skill'>
            <p>CSS: 85%</p>
            <div className='progress-bar'>
              <div className='progress' style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className='skill'>
            <p>JavaScript: 80%</p>
            <div className='progress-bar'>
              <div className='progress' style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className='skill'>
            <p>React.js: 75%</p>
            <div className='progress-bar'>
              <div className='progress' style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
