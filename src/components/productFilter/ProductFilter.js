import React, { useState } from 'react'
import './ProductFilter.css'

export default function ProductFilter({ onFilterChange }) {
  const [filterType, setFilterType] = useState('')
  const [filterPriceOrder, setFilterPriceOrder] = useState('')
  const [isFilterClicked, setIsFliterClicked] = useState(false)

  function handleFilterChange() {
    onFilterChange({
      type: filterType,
      priceOrder: filterPriceOrder,
    })
  }

  return (
    <div className="productFilter">
      <h6
        className={`filterItems clickable ${
          isFilterClicked ? 'activeFilter' : ''
        }`}
        onClick={() => setIsFliterClicked(!isFilterClicked)}
      >
        {isFilterClicked ? 'filter -' : 'filter +'}
      </h6>
      <div
        className={`filterDropdownContainer ${isFilterClicked ? 'active' : ''}`}
      >
        <label htmlFor="typeFilter">Filter by Type:</label>
        <select
          id="typeFilter"
          value={filterType}
          onChange={(event) => setFilterType(event.target.value)}
        >
          <option value="">All</option>
          <option value="SHIRT">Shirt</option>
          <option value="JERSEY">Jersey</option>
          <option value="JACKET">Jacket</option>
        </select>
        <label htmlFor="priceOrderFilter">Sort by Price:</label>
        <select
          id="priceOrderFilter"
          value={filterPriceOrder}
          onChange={(event) => setFilterPriceOrder(event.target.value)}
        >
          <option value="">All</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <button onClick={handleFilterChange}>Apply Filter</button>
      </div>
    </div>
  )
}

// TO-DO: FILTER DROPDOWN STYLING + LOGIC!
