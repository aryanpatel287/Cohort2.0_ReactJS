import React from 'react'
import '../styles/HeroSection.css'


const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-text"><h1>Unleash Your Inner Champion Today.</h1><h1>All In One Place.</h1>
      </div>
      <div className="hero-description">Join the ultimate tennis experience - where passion meets performance,
        and every swing brings you closer to victory.</div>
      <div className="hero-action-btn"><button className="btn">Start your own Journey</button></div>
      <div className="coaches-overview">
        <span>Train with real professionals.
          Get the real results</span>
        <div className="coaches">
          <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/men/18.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/men/7.jpg" alt="" />
        </div>
      </div>
      <div className="social-links">
        <span><a href="">Instagram</a><i className="ri-arrow-right-up-long-line"></i></span>
        <span><a href="">Facebook</a><i className="ri-arrow-right-up-long-line"></i></span>
        <span><a href="">Tik Tok</a><i className="ri-arrow-right-up-long-line"></i></span>
      </div>
    </div>
  )
}

export default HeroSection
