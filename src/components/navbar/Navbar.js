import React from 'react'
import fkLogo from '../../assets/logos/Fullkit.png'
import fkLogo2 from '../../assets/logos/coollogo_com-28275806.gif'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="navbar-container">
      <img
        src={fkLogo2}
        alt="full kit logo"
        className="logo clickable"
        onClick={() => navigate('/')}
      />
      <nav className="navbar">
        <h3 onClick={() => navigate('/shop')} className="clickable">
          SHOP
        </h3>
        <h3 onClick={() => navigate('/archive')} className="clickable">
          ARCHIVE
        </h3>
        <h3 onClick={() => navigate('/about')} className="clickable">
          ABOUT
        </h3>
      </nav>
      <div className="cart-container">
        <h3>CART (0)</h3>
      </div>
    </div>
  )
}
