import React from 'react'
import '../styles/AboutSection.css'
const AboutSecition = () => {
    return (
        <div className='about-wrapper'>
            <div className="about-intro">
                <span>About Horizon</span>
                <div className="about-description">At Horizon, we don't just play tennis - we live it. Since 2021,
                    our club has been a home for players of all levels, from eager
                    beginners to seasoned pros.</div>
            </div>
            <div className="about-cards-section">
                <div className="about-card"></div>
                <div className="about-card"></div>
                <div className="about-card"></div>
            </div>
            <div className="about-facts-section">
                <span>A few more facts about us in numbers</span>
                <div className="all-facts">
                    <div className="fact-wrapper">
                        <div className="fact-stat">12,000+</div>
                        <div className="fact-title">Hours of play anually</div>
                    </div>
                    <div className="fact-wrapper">
                        <div className="fact-stat">89%</div>
                        <div className="fact-title">Player Retention Rate</div>
                    </div>
                    <div className="fact-wrapper">
                        <div className="fact-stat">1,200+</div>
                        <div className="fact-title">Active Members</div>
                    </div>
                    <div className="fact-wrapper">
                        <div className="fact-stat">125+</div>
                        <div className="fact-title">Annual Tournaments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSecition
