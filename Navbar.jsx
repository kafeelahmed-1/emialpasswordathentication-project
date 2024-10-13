import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <h1 style={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif', fontSize: '24px' }}>Ahmed <span style={{ color: '#007BFF',  padding: '1px 1px', borderRadius: '5px' }}>Code's</span></h1>
      </div>
      <ul className='nav-links'>
        <li>Home</li>
        <li>Skills</li>
        <li>Work Experience</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
