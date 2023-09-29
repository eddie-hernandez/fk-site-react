import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './App.css'
import products from './products.json'

// importing components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ScrollerText from './components/scrollerText/scrollerText'
import Product from './pages/product/Product'

// importing pages
import About from './pages/about/About'
import Archive from './pages/archive/Archive'
import Cart from './pages/cart/Cart'
import NotFound from './pages/NotFound/NotFound'
import Shop from './pages/shop/Shop'
import Home from './pages/home/Home'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  // extracting all collections from products.json
  const collections = Array.from(
    new Set(products.map((product) => product.collection))
  )

  return (
    <div className="App">
      <ScrollerText />
      <Navbar />
      <Routes>
        {/* establishing routes */}
        <Route path="/" element={<Home collections={collections} />} />
        <Route
          path="/shop"
          element={<Shop collections={collections} products={products} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/:productId" element={<Product />} />
        {/* catch all / page not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
