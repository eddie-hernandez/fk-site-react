import React, { useState, useEffect } from 'react'
import './AllItems.css'
import ProductFilter from '../productFilter/ProductFilter'
import { Link } from 'react-router-dom'

// importing shirts from json file
import products from '../../products.json'

export default function AllItems() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState({ type: '', priceOrder: '' })

  useEffect(() => {
    applyFilters()
  }, [filters])

  function applyFilters() {
    let filtered = [...products]

    if (filters.type) {
      filtered = filtered.filter(
        (product) => product.productType === filters.type
      )
    }

    if (filters.priceOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (filters.priceOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(filtered)
  }

  function handleFilterChange(newFilters) {
    setFilters(newFilters)
  }

  return (
    <div className="componentContainer">
      <div className="pageHeader">
        <h2 className="pageTitle">ALL ITEMS</h2>
        <ProductFilter onFilterChange={handleFilterChange} />
      </div>
      <div className="allProductsContainer">
        {filteredProducts.map((product) => (
          <div className="productContainer" key={product.id}>
            <Link to={`/shop/${product.id}`} key={product.id}>
              <img
                src={process.env.PUBLIC_URL + product.imageSrc}
                alt={product.title}
                className="productImg clickable"
              />
              <p className="productTitle">
                {product.title}
                <br />${product.price}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
