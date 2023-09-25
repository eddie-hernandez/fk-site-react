import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Go back home!</p>
      <Link to="/">Home</Link>
    </div>
  )
}
