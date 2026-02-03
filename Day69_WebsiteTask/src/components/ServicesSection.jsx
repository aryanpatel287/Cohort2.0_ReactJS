import React from 'react'
import '../styles/SectionSection.css'
const ServicesSection = () => {
    return (
        <div className='services-wrapper'>
            <div className="services-intro"><span className="services-title">Services</span>
                <div className="services-desciption">Explore our full range of coaching.
                    training, and tennis experiences. From
                    first serve to match point - we've
                    got the right program for you.</div>
                <button className="btn">Explore Now<i className="ri-arrow-right-up-long-line"></i></button></div>
            <div className="training-programs">
                <span>Training Programs</span>
                <span>Programs designed for all ages and abilities</span>
            </div>
            <div className="court-access"></div>
        </div>
    )
}

export default ServicesSection
