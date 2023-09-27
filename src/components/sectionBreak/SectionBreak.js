import React from 'react'
import './SectionBreak.css'

export default function SectionBreak() {
  return (
    <div className="breakContainer" id="kitBreak">
      <h6 className="breakText">
        what kit would you like to see us make next?
      </h6>
      <form className="breakForm">
        <input type="text" id="kit" placeholder="Kit Proposal" required />
        <button type="submit" id="submit" className="clickable">
          <h6>PROPOSE KIT IDEA</h6>
        </button>
      </form>
    </div>
  )
}
