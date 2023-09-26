import React, { useState } from 'react'
import './ProductFilter.css'

export default function ProductFilter({
  onFilterChange,
  products,
  filterContainerRef,
  isFilterClicked,
  filters,
}) {
  const typeList = Array.from(
    new Set(products.map((product) => product.productType))
  )

  const collectionList = Array.from(
    new Set(products.map((product) => product.collection))
  )

  // function to reset filters to their initial state
  function resetFilters() {
    onFilterChange({
      type: '',
      priceOrder: '',
      collection: '',
    })
  }

  return (
    <div
      className={`filterDropdownContainer ${isFilterClicked ? 'active' : ''}`}
      ref={filterContainerRef}
    >
      <div className="filterInfo">
        <h6 className="filterOptions">filter options:</h6>
        <button
          onClick={resetFilters}
          className={`resetFilters ${
            filters.type || filters.collection || filters.priceOrder
              ? 'clickable'
              : 'unavailable'
          } `}
        >
          reset filters
        </button>
      </div>
      <div className="filtersWrapper">
        <div className="filterContainer">
          <label htmlFor="typeFilter" className="filterLabel">
            Type:
          </label>
          <select
            className="clickable"
            id="typeFilter"
            value={filters.type}
            onChange={(event) =>
              onFilterChange({
                ...filters,
                type: event.target.value,
              })
            }
          >
            {/* <option value="" disabled hidden>
              Type
            </option> */}
            <option value="">All</option>
            {typeList.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="filterSeparator" />
        <div className="filterContainer">
          <label htmlFor="collectionFilter" className="filterLabel">
            Collection:
          </label>
          <select
            className="clickable"
            id="collectionFilter"
            value={filters.collection}
            onChange={(event) =>
              onFilterChange({
                ...filters,
                collection: event.target.value,
              })
            }
          >
            {/* <option value="" disabled hidden>
              Collection
            </option> */}
            <option value="">All</option>
            {collectionList.map((collection) => (
              <option key={collection} value={collection}>
                {collection}
              </option>
            ))}
          </select>
        </div>
        <div className="filterSeparator" />
        <div className="filterContainer">
          <label htmlFor="priceOrderFilter" className="filterLabel">
            Price Order:
          </label>
          <select
            className="clickable"
            id="priceOrderFilter"
            value={filters.priceOrder}
            onChange={(event) =>
              onFilterChange({
                ...filters,
                priceOrder: event.target.value,
              })
            }
          >
            {/* <option value="" disabled hidden>
              Price Order
            </option> */}
            <option value="">All</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}
