import React, { useState, useEffect, useRef } from 'react'
import './AllItems.css'
import ProductFilter from '../productFilter/ProductFilter'
import { Link } from 'react-router-dom'

// importing shirts from json file
import products from '../../products.json'

export default function AllItems() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [isFilterClicked, setIsFilterClicked] = useState(false)
  const [filters, setFilters] = useState({
    type: '',
    priceOrder: '',
    collection: '',
    availableSizes: '',
  })

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

    if (filters.collection) {
      filtered = filtered.filter(
        (product) => product.collection === filters.collection
      )
    }

    if (filters.priceOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (filters.priceOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(filtered)
  }

  function onFilterChange(newFilters) {
    setFilters(newFilters)
  }

  const filterContainerRef = useRef(null)
  const filterItemsRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterContainerRef.current &&
        !filterContainerRef.current.contains(event.target) &&
        event.target !== filterItemsRef.current
      ) {
        setIsFilterClicked(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="collectionComponentContainer">
      <div className="pageHeader">
        <h2 className="pageTitle">ALL ITEMS</h2>
        <h6
          className={`filterItems clickable ${
            isFilterClicked ? 'activeFilter' : ''
          }`}
          onClick={() => {
            setIsFilterClicked(!isFilterClicked)
          }}
          ref={filterItemsRef}
        >
          {isFilterClicked ? 'filter -' : 'filter +'}
        </h6>
      </div>
      <ProductFilter
        onFilterChange={onFilterChange}
        products={products}
        filters={filters}
        isFilterClicked={isFilterClicked}
        filterContainerRef={filterContainerRef}
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
                <p className="productTitle">
                  {product.title}
                  <br />${product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
