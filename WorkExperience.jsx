import React from 'react';
import Slider from 'react-slick';
import './WorkExperience.css';

const WorkExperience = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='work-experience'>
      <h2>Work Experience</h2>
      <Slider {...settings}>
        <div className='experience-item'>
          <h3>Company 1</h3>
          <p>Role: Frontend Developer</p>
          <p>Duration: 2022 - 2023</p>
        </div>
        <div className='experience-item'>
          <h3>Company 2</h3>
          <p>Role: UI Designer</p>
          <p>Duration: 2021 - 2022</p>
        </div>
      </Slider>
    </section>
  );
};

export default WorkExperience;
