import React from 'react'
import fkbwLogo from '../../assets/logos/Fullkit B-W.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <img
          src={fkbwLogo}
          className="logo"
          alt="full kit black and white logo"
        />
        <div className="footerLinks">
          <a
            href="https://www.instagram.com/fullkitwnkrs/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a href="mailto:info@dominospizza.com">Email</a>
        </div>
      </div>
      <p className="copyright">
        &#169; 2023 Full Kit Wankers, All Rights Reserved.
      </p>
    </footer>
  )
}
