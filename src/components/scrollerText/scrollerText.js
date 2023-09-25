import React from 'react'
import soccerBall from '../../assets/icons/soccer.svg'
import './scrollerText.css'

export default function ScrollerText() {
  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text-outer">
        {Array.from({ length: 24 }, (_, i) => (
          <div className="scrolling-text-inner" key={i}>
            <h2 className="scrolling-text">FULL KIT</h2>
            <img src={soccerBall} alt="soccer ball icon" className="icon" />
          </div>
        ))}
      </div>
    </div>
  )
}
