import React from 'react'
import './EmailBreak.css'

export default function EmailBreak() {
  return (
    <div className="breakContainer" id="emailBreak">
      <p className='breakText'>
        Got an email address? Well, we've got a newsletter.
        <br />
        Subscribe Here --{'>'}
      </p>
      <form className="breakForm">
        <input type="email" id="email" placeholder="Email Address" required />
        <button type="submit" id="submit" className='clickable'>
          CONFIRM{<br />}SUBSCRIPTION
        </button>
      </form>
    </div>
  )
}
