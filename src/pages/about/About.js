import React from 'react'
import './About.css'
import about1 from '../../assets/about1.jpeg'
import about2 from '../../assets/about2.jpeg'
import about3 from '../../assets/about3.jpeg'

export default function About() {
  return (
    <div className="aboutPage">
      <div className="aboutWrap">
        <img src={about1} className="aboutimg" alt="playin footy" />
        <img src={about2} className="aboutimg" alt="past kits" />
      </div>
      <div className="aboutBreak" id="aboutBio">
        <h3 className="aboutText">
          Full Kit is a U.S.-based collective on a mission to gear football in a
          cooler direction. We hand design, produce, and distribute our kits
          ourselves.
        </h3>
      </div>
      <img src={about3} className="aboutimg2" alt="kit party" />
      <div className="aboutBreak" id="aboutBio2">
        <h3 className="aboutText">
          We play in verticals beyond kit making, with some of our specialties
          being:
        </h3>
        <h4 className="aboutText">
          <i>
            Events + Experiences, Music Supervision, Design + Consultation,
            Photo + Video Shoots
          </i>
        </h4>
        <h4 className="aboutText aboutTextSpecial">
          Have a project you’d like to send our way? Reach out{' '}
          <a className='aboutTextSpecial' href='mailto:fullkitlads@gmail.com' rel='noopener'>
            <u>here</u>
          </a>
          .
        </h4>
      </div>
    </div>
  )
}
