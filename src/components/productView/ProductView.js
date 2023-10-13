import React, { useState, useEffect } from 'react'
import './ProductView.css'
import ProductFilter from '../productFilter/ProductFilter'
import { Link, useLocation } from 'react-router-dom'
import SingleProduct from '../singleProduct/SingleProduct'

export default function ProductView({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState({
    type: '',
    priceOrder: '',
    collection: '',
    availableSizes: '',
  })

  const location = useLocation()

  const locationProduct = location.pathname.split('/').pop()

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
  }, [filters, products])

  return (
    <div className="collectionComponentContainer" id="productView">
      <ProductFilter
        onFilterChange={onFilterChange}
        products={products}
        filters={filters}
      />
      <h3
        className={`productPageTitle
          ${
            locationProduct === 'products'
              ? 'pageTitle'
              : 'productLocationTitle'
          }
        `}
      >
        {locationProduct === 'products'
          ? `ALL PRODUCTS ${
              filters.type ||
              filters.priceOrder ||
              filters.collection ||
              filters.availableSizes
                ? '(FILTERED)'
                : ''
            }`
          : locationProduct.charAt(locationProduct.length - 1) === 's'
          ? locationProduct
          : `${locationProduct}s`}
      </h3>
      {filteredProducts.length === 0 ? (
        <div className="noProductsFound">
          <h3>No products here...yet!</h3>
        </div>
      ) : (
        <div className="allProductsContainer">
          {filteredProducts.map((product) => (
            <div className="productContainer" key={product.id}>
              <Link to={`/shop/${product.id}`} key={product.id}>
                <SingleProduct product={product} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
