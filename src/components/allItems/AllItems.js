import React, { useState, useEffect } from 'react'
import './AllItems.css'
import ProductFilter from '../productFilter/ProductFilter'
import { Link } from 'react-router-dom'

export default function AllItems({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState({
    type: '',
    priceOrder: '',
    collection: '',
    availableSizes: '',
  })

  // Function to apply filters
  function applyFilters() {
    let filtered = [...products]

    if (filters.type) {
      filtered = filtered.filter(
        (product) => product.productType === filters.type.toUpperCase()
      )
    }

    if (filters.collection) {
      filtered = filtered.filter(
        (product) => product.collection === filters.collection.toUpperCase()
      )
    }

    if (filters.priceOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (filters.priceOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(filtered)
  }

  // Function to handle filter changes
  function onFilterChange(newFilters) {
    setFilters(newFilters)
  }

  // Apply filters whenever the filters state changes
  useEffect(() => {
    applyFilters()
  }, [filters])

  return (
    <div className="collectionComponentContainer">
      <ProductFilter
        onFilterChange={onFilterChange}
        products={products}
        filters={filters}
      />
      {filteredProducts.length === 0 ? (
        <div className="noProductsFound">
          <h3>No products here...yet!</h3>
        </div>
      ) : (
        <div className="allProductsContainer">
          {filteredProducts.map((product) => (
            <div className="productContainer" key={product.id}>
              <Link to={`/shop/${product.id}`} key={product.id}>
                <img
                  src={process.env.PUBLIC_URL + product.imageSrc}
                  alt={product.title}
                  className="productImg clickable"
                />
                <p className="productTitle">{product.title}</p>
                <p>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
