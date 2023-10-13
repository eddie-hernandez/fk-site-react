import React from 'react'
import './EmailBreak.css'

export default function EmailBreak() {
  return (
    <div className="breakContainer" id="emailBreak">
      <h6 className="breakText">
        Don't miss the latest drop. Subscribe to the newsletter {'-->'}
      </h6>
      <form className="breakForm">
        <input type="email" id="email" placeholder="Email Address" required />
        <button type="submit" id="submit" className="clickable">
          <h6>CONFIRM SUBSCRIPTION</h6>
        </button>
      </form>
    </div>
  )
}
