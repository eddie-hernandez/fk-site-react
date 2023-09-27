import React from 'react'
import './EmailBreak.css'

export default function EmailBreak() {
  return (
    <div className="breakContainer" id="emailBreak">
      <h6 className="breakText">
        Got an email address? Well, we've got a newsletter.
        <br />
        Subscribe Here:
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
