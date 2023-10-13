import React, { useState, useEffect, useRef } from 'react'
// import fkLogo from '../../assets/logos/Fullkit.png'
import fkLogo2 from '../../assets/logos/coollogo_com-28275806.gif'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ collections, productTypes }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [shopNavOpen, setShopNavOpen] = useState(false)
  const [itemNavOpen, setItemNavOpen] = useState(false)
  const [collectionNavOpen, setCollectionNavOpen] = useState(false)
  const shopNavRef = useRef()
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(event) {
      if (shopNavRef.current && !shopNavRef.current.contains(event.target)) {
        closeNav()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function closeNav() {
    setMenuOpen(false)
    setShopNavOpen(false)
    setItemNavOpen(false)
    setCollectionNavOpen(false)
  }

  const modifiedCollections = collections.map((collection) => {
    return collection
      .replace(/^the /i, '')
      .replace(/ collection$/i, '')
      .replace(/\s+/g, '-')
      .toLowerCase()
  })

  const modifiedTypes = productTypes.map((type) => {
    return type.toLowerCase()
  })

  return (
    <div
      className={`navbarContainer ${menuOpen ? 'menuOpen' : ''}`}
      ref={shopNavRef}
    >
      <button
        className="menuButton"
        onClick={() => {
          menuOpen ? closeNav() : setMenuOpen(true)
        }}
      >
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
      </button>
      <img
        src={fkLogo2}
        alt="full kit logo"
        className="logo clickable"
        onClick={() => navigate('/')}
      />
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="shopNavWrapper">
          <h6
            onClick={() => setShopNavOpen(!shopNavOpen)}
            className={`navbarLink clickable ${shopNavOpen ? 'open' : ''} ${
              location.pathname.includes('shop') ? 'active' : ''
            }`}
          >
            SHOP
          </h6>
          <div className={`shopNav ${shopNavOpen ? 'open' : ''}`}>
            <div className="shopNavCol">
              <p onClick={() => setItemNavOpen(!itemNavOpen)}>
                <b>
                  <u>Products</u>
                </b>
              </p>
              <div className="shopNavItemWrapper">
                <Link to="/shop/products" onClick={() => closeNav()}>
                  <p className="clickable">All Products</p>
                </Link>
                {modifiedTypes.map((type) => (
                  <Link
                    to={`/shop/products/${type.toLowerCase()}`}
                    key={type}
                    onClick={() => closeNav()}
                  >
                    <p
                      style={{ textTransform: 'capitalize' }}
                      className="shopNavItem clickable"
                    >
                      {type.charAt(type.length - 1) === 's' ? type : `${type}s`}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="shopNavCol">
              <p onClick={() => setCollectionNavOpen(!collectionNavOpen)}>
                <b>
                  <u>Collections</u>
                </b>
              </p>
              <div className="shopNavItemWrapper">
                <Link to="/shop/collections" onClick={() => closeNav()}>
                  <p className="clickable">All Collections</p>
                </Link>
                {modifiedCollections.map((collection) => (
                  <Link
                    to={`/shop/collections/${collection.toLowerCase()}`}
                    key={collection}
                    onClick={() => closeNav()}
                  >
                    <p
                      style={{ textTransform: 'capitalize' }}
                      className="shopNavItem clickable"
                    >
                      {collection.replace(/-/g, ' ')}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lineBreak" />
        <NavLink
          to="/archive"
          onClick={() => closeNav()}
          className="clickable"
        >
          <h6 className="navbarLink">ARCHIVE</h6>
        </NavLink>
        <div className="lineBreak" />
        <NavLink to="/about" onClick={() => closeNav()} className="clickable">
          <h6 className="navbarLink">ABOUT</h6>
        </NavLink>
      </nav>
      <div className="cart-container">
        <h6>CART (0)</h6>
      </div>
    </div>
  )
}
