import React from 'react'
import './SectionBreak.css'

export default function SectionBreak() {
  return (
    <div className="breakContainer" id="kitBreak">
      <p className="breakText">what kit would you like to see us make next?</p>
      <form className="breakForm">
        <input type="text" id="kit" placeholder="Kit Proposal" required />
        <button type="submit" id="submit" className="clickable">
          PROPOSE KIT IDEA
        </button>
      </form>
    </div>
  )
}
