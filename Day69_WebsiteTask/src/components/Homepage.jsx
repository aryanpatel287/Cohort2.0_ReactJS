import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'

const Homepage = () => {
    return (
        <div className='homepage-wrapper'>
            <Navbar />
            <HeroSection />
            <AboutSection />
            
        </div>
    )
}

export default Homepage
