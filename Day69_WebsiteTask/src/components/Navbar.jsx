import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {

return (
  <div>
    <nav>
      <div className="brand-logo">
        Horizon Courts
      </div>
      <ul className="nav-links">
        <li className='nav-link'>About Us</li>
        <li className='nav-link'>Services</li>
        <li className='nav-link'>Coaches</li>
        <li className='nav-link'>Events</li>
        <li className='nav-link'>Contacts</li>
      </ul>
      <button className='action-btn btn'>Book now<i className="ri-arrow-right-up-long-line"></i></button>
    </nav>
  </div>
)
}

export default Navbar
