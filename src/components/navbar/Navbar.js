import React, { useState } from 'react'
import fkLogo from '../../assets/logos/Fullkit.png'
import fkLogo2 from '../../assets/logos/coollogo_com-28275806.gif'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={`navbarContainer ${menuOpen ? 'menuOpen' : ''}`}>
      <button className="menuButton" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </button>
      <img
        src={fkLogo2}
        alt="full kit logo"
        className="logo clickable"
        onClick={() => navigate('/')}
      />
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <h6 onClick={() => navigate('/shop')} className="navbarLink clickable">
          SHOP
        </h6>
        <div className="lineBreak" />
        <h6
          onClick={() => navigate('/archive')}
          className="navbarLink clickable"
        >
          ARCHIVE
        </h6>
        <div className="lineBreak" />
        <h6 onClick={() => navigate('/about')} className="navbarLink clickable">
          ABOUT
        </h6>
      </nav>
      <div className="cart-container">
        <h6>CART (0)</h6>
      </div>
    </div>
  )
}
